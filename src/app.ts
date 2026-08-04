import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import {
  getAllDiseases,
  addDisease,
  updateDisease,
  deleteDisease,
  getAllHealthTips,
  addHealthTip,
  getAllVaccinations,
  getAllFAQs,
  saveFeedback,
  getAllFeedback,
  saveAnalysisHistory,
  getAnalysisHistory,
  getAdminStats
} from './db/database.js';
import { analyzeSymptomsFallback } from './utils/expertRuleEngine.js';
import { AnalysisInput, AnalysisResult } from './types.js';

dotenv.config();

export const app = express();
app.use(express.json());

// Initialize Gemini AI client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// --- API ROUTES ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'CowCare AI', geminiConfigured: !!ai });
});

// Symptom Analysis Endpoint using Gemini AI (with expert fallback)
app.post('/api/analyze-symptoms', async (req, res) => {
  try {
    const input: AnalysisInput = req.body || ({} as any);
    const animalType = input.animalType || 'Cow';
    const symptoms = Array.isArray(input.symptoms) ? input.symptoms : [];
    const age = input.age || '';
    const gender = input.gender || '';
    const additionalNotes = input.additionalNotes || '';
    const isTelugu = input.language === 'te';

    if (symptoms.length === 0) {
      return res.status(400).json({ error: 'Please select at least one symptom.' });
    }

    let result: AnalysisResult | null = null;

    if (ai) {
      try {
        const langInstruction = isTelugu
          ? `మీరు అనుభవజ్ఞులైన పశువైద్యులు. రైతులు సులభంగా అర్థం చేసుకునే సరళమైన తెలుగులో మాత్రమే సమాధానం ఇవ్వండి. Disease names in possible_disease field should remain in English with Telugu names in brackets e.g. Foot and Mouth Disease (నోరు-కాళ్ల వ్యాధి).`
          : `You are an experienced veterinarian. Answer in English. Include Telugu translation in brackets for disease name e.g. Foot and Mouth Disease (నోరు-కాళ్ల వ్యాధి).`;

        const prompt = `${langInstruction}
Based on the symptoms below for a ${animalType} (Age: ${age || 'N/A'}, Gender: ${gender || 'N/A'}), provide educational guidance only.
Never claim certainty. Always recommend consulting a licensed veterinarian.

Symptoms reported: ${symptoms.join(', ')}
Additional notes from farmer: ${additionalNotes || 'None'}

Return JSON strictly matching this schema:
{
  "possible_disease": "Name of disease in format 'English Name (తెలుగు పేరు)'",
  "confidence": "e.g. 85% (Moderate Probability)",
  "explanation": "Clear clinical explanation of why these symptoms correlate with this condition in cows/buffaloes",
  "first_aid": ["Step 1", "Step 2", "Step 3"],
  "foods_to_give": ["Food 1", "Food 2"],
  "foods_to_avoid": ["Food 1", "Food 2"],
  "emergency_level": "Low" | "Moderate" | "High" | "Critical",
  "preventive_measures": ["Measure 1", "Measure 2"],
  "when_to_visit_vet": "Clear timeline advice on when to call or visit a licensed veterinarian"
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                possible_disease: { type: Type.STRING },
                confidence: { type: Type.STRING },
                explanation: { type: Type.STRING },
                first_aid: { type: Type.ARRAY, items: { type: Type.STRING } },
                foods_to_give: { type: Type.ARRAY, items: { type: Type.STRING } },
                foods_to_avoid: { type: Type.ARRAY, items: { type: Type.STRING } },
                emergency_level: { type: Type.STRING },
                preventive_measures: { type: Type.ARRAY, items: { type: Type.STRING } },
                when_to_visit_vet: { type: Type.STRING }
              },
              required: [
                'possible_disease',
                'confidence',
                'explanation',
                'first_aid',
                'foods_to_give',
                'foods_to_avoid',
                'emergency_level',
                'preventive_measures',
                'when_to_visit_vet'
              ]
            }
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text.trim());
          const validLevels = ['Low', 'Moderate', 'High', 'Critical'];
          const level = validLevels.includes(parsed.emergency_level) ? parsed.emergency_level : 'Moderate';

          result = {
            possibleDisease: parsed.possible_disease || 'Undetermined Cattle Condition',
            confidence: parsed.confidence || '75% (AI Prediction)',
            explanation: parsed.explanation || 'Consult a veterinarian for precise diagnosis.',
            firstAid: Array.isArray(parsed.first_aid) ? parsed.first_aid : ['Keep animal isolated and rested.'],
            foodsToGive: Array.isArray(parsed.foods_to_give) ? parsed.foods_to_give : ['Fresh green fodder', 'Clean water'],
            foodsToAvoid: Array.isArray(parsed.foods_to_avoid) ? parsed.foods_to_avoid : ['Moldy straw'],
            emergencyLevel: level as any,
            preventiveMeasures: Array.isArray(parsed.preventive_measures) ? parsed.preventive_measures : ['Maintain barn hygiene'],
            whenToVisitVet: parsed.when_to_visit_vet || 'Consult a veterinarian as soon as possible.'
          };
        }
      } catch (err) {
        console.error('Gemini API analysis error, switching to expert rule engine fallback:', err);
      }
    }

    // Use expert rule engine if Gemini wasn't initialized or failed
    if (!result) {
      result = analyzeSymptomsFallback(input);
    }

    // Save to history log
    try {
      await saveAnalysisHistory(result, animalType, symptoms, age, gender);
    } catch (dbErr) {
      console.error('Failed to save analysis history:', dbErr);
    }

    return res.json({ success: true, data: result });
  } catch (routeErr) {
    console.error('Error in analyze-symptoms route:', routeErr);
    const fallbackResult = analyzeSymptomsFallback(req.body || ({} as any));
    return res.json({ success: true, data: fallbackResult });
  }
});

// Diseases CRUD
app.get('/api/diseases', async (req, res) => {
  try {
    const diseases = await getAllDiseases();
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch diseases' });
  }
});

app.post('/api/diseases', async (req, res) => {
  try {
    const newDisease = await addDisease(req.body);
    res.json(newDisease);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add disease' });
  }
});

app.put('/api/diseases/:id', async (req, res) => {
  try {
    await updateDisease(req.params.id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update disease' });
  }
});

app.delete('/api/diseases/:id', async (req, res) => {
  try {
    await deleteDisease(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete disease' });
  }
});

// Health Tips CRUD
app.get(['/api/health-tips', '/api/tips'], async (req, res) => {
  try {
    const tips = await getAllHealthTips();
    res.json(tips);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch health tips' });
  }
});

app.post('/api/health-tips', async (req, res) => {
  try {
    const newTip = await addHealthTip(req.body);
    res.json(newTip);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add health tip' });
  }
});

// Vaccinations
app.get('/api/vaccinations', async (req, res) => {
  try {
    const list = await getAllVaccinations();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vaccination schedule' });
  }
});

// FAQs
app.get('/api/faqs', async (req, res) => {
  try {
    const faqs = await getAllFAQs();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// Feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const list = await getAllFeedback();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const item = await saveFeedback(req.body);
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

// Admin Stats
app.get('/api/admin/stats', async (req, res) => {
  try {
    const stats = await getAdminStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admin stats' });
  }
});

// Analysis History
app.get('/api/analysis-history', async (req, res) => {
  try {
    const history = await getAnalysisHistory();
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch analysis history' });
  }
});

export default app;
