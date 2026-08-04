import initSqlJs, { Database as SqlJsDatabase } from 'sql.js';
import fs from 'fs';
import path from 'path';
import { INITIAL_DISEASES, INITIAL_HEALTH_TIPS, INITIAL_VACCINATIONS, INITIAL_FAQS } from '../data/seedData';
import { Disease, HealthTip, VaccineItem, FAQItem, FeedbackItem, AnalysisResult, AdminStats } from '../types';

const getDbFilePath = () => {
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    return path.join('/tmp', 'cowcare.sqlite');
  }
  return path.join(process.cwd(), 'cowcare.sqlite');
};

let db: SqlJsDatabase | null = null;
let memoryFeedbackStore: FeedbackItem[] = [];
let memoryAnalysisHistory: any[] = [];

export async function getDb(): Promise<SqlJsDatabase | null> {
  if (db) return db;

  try {
    const SQL = await initSqlJs();
    const DB_FILE = getDbFilePath();

    if (fs.existsSync(DB_FILE)) {
      try {
        const fileBuffer = fs.readFileSync(DB_FILE);
        db = new SQL.Database(fileBuffer);
        console.log('Loaded existing SQLite database from disk.');
      } catch (err) {
        db = new SQL.Database();
      }
    } else {
      db = new SQL.Database();
      console.log('Created new SQLite database instance.');
    }

    initTables(db);
    saveDbToDisk(db);
    return db;
  } catch (err) {
    console.warn('SQLite initialization unavailable in current environment, using seed memory fallback:', err);
    return null;
  }
}

function saveDbToDisk(database: SqlJsDatabase) {
  try {
    const DB_FILE = getDbFilePath();
    const data = database.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_FILE, buffer);
  } catch (err) {
    // Ignore serverless filesystem permissions gracefully
  }
}

function initTables(database: SqlJsDatabase) {
  database.run(`
    CREATE TABLE IF NOT EXISTS diseases (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      localNames TEXT,
      targetAnimal TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      causes TEXT NOT NULL,
      symptoms TEXT NOT NULL, -- JSON string array
      treatment TEXT NOT NULL,
      prevention TEXT NOT NULL,
      vaccination TEXT NOT NULL,
      severity TEXT NOT NULL,
      imageUrl TEXT
    );

    CREATE TABLE IF NOT EXISTS health_tips (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      season TEXT,
      content TEXT NOT NULL,
      keyPoints TEXT NOT NULL -- JSON string array
    );

    CREATE TABLE IF NOT EXISTS vaccinations (
      id TEXT PRIMARY KEY,
      age TEXT NOT NULL,
      vaccine TEXT NOT NULL,
      targetDisease TEXT NOT NULL,
      frequency TEXT NOT NULL,
      route TEXT NOT NULL,
      importance TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS faqs (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      question TEXT NOT NULL,
      answer TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS feedback (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      district TEXT,
      animalType TEXT,
      rating INTEGER NOT NULL,
      comments TEXT NOT NULL,
      suggestions TEXT,
      createdAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS analysis_history (
      id TEXT PRIMARY KEY,
      animalType TEXT NOT NULL,
      age TEXT,
      gender TEXT,
      symptoms TEXT NOT NULL, -- JSON array
      possibleDisease TEXT NOT NULL,
      confidence TEXT NOT NULL,
      emergencyLevel TEXT NOT NULL,
      explanation TEXT NOT NULL,
      firstAid TEXT NOT NULL, -- JSON array
      foodsToGive TEXT NOT NULL, -- JSON array
      foodsToAvoid TEXT NOT NULL, -- JSON array
      preventiveMeasures TEXT NOT NULL, -- JSON array
      whenToVisitVet TEXT NOT NULL,
      analyzedAt TEXT NOT NULL
    );
  `);

  // Check if diseases table is empty, if so seed data
  const diseaseCheck = database.exec('SELECT COUNT(*) as count FROM diseases');
  const count = diseaseCheck[0]?.values[0]?.[0] as number || 0;

  if (count === 0) {
    console.log('Seeding initial diseases, health tips, vaccinations, and faqs into SQLite...');

    // Seed Diseases
    INITIAL_DISEASES.forEach(d => {
      database.run(
        `INSERT INTO diseases (id, name, localNames, targetAnimal, category, description, causes, symptoms, treatment, prevention, vaccination, severity, imageUrl)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          d.id,
          d.name,
          d.localNames || '',
          d.targetAnimal,
          d.category,
          d.description,
          d.causes,
          JSON.stringify(d.symptoms),
          d.treatment,
          d.prevention,
          d.vaccination,
          d.severity,
          d.imageUrl || ''
        ]
      );
    });

    // Seed Health Tips
    INITIAL_HEALTH_TIPS.forEach(t => {
      database.run(
        `INSERT INTO health_tips (id, title, category, season, content, keyPoints) VALUES (?, ?, ?, ?, ?, ?)`,
        [t.id, t.title, t.category, t.season || 'All Seasons', t.content, JSON.stringify(t.keyPoints)]
      );
    });

    // Seed Vaccinations
    INITIAL_VACCINATIONS.forEach(v => {
      database.run(
        `INSERT INTO vaccinations (id, age, vaccine, targetDisease, frequency, route, importance) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [v.id, v.age, v.vaccine, v.targetDisease, v.frequency, v.route, v.importance]
      );
    });

    // Seed FAQs
    INITIAL_FAQS.forEach(f => {
      database.run(
        `INSERT INTO faqs (id, category, question, answer) VALUES (?, ?, ?, ?)`,
        [f.id, f.category, f.question, f.answer]
      );
    });

    // Seed sample initial feedback
    database.run(
      `INSERT INTO feedback (id, name, district, animalType, rating, comments, suggestions, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ['fb-1', 'Ramesh Patel', 'Anand, Gujarat', 'Cow', 5, 'Very helpful symptom checker! Allowed us to recognize early Foot and Mouth signs and call vet in time.', 'Add regional language translations if possible.', new Date(Date.now() - 86400000 * 3).toISOString()]
    );
    database.run(
      `INSERT INTO feedback (id, name, district, animalType, rating, comments, suggestions, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ['fb-2', 'Sukhdev Singh', 'Ludhiana, Punjab', 'Buffalo', 5, 'The vaccination schedule and bloat first aid guidelines are spot-on for Murrah buffalo keepers.', 'Great initiative for dairy farmers.', new Date(Date.now() - 86400000 * 7).toISOString()]
    );

    saveDbToDisk(database);
  }
}

// Database helper operations
export async function getAllDiseases(): Promise<Disease[]> {
  try {
    const database = await getDb();
    if (!database) return INITIAL_DISEASES;
    const res = database.exec('SELECT * FROM diseases');
    if (!res.length) return INITIAL_DISEASES;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return {
        ...obj,
        symptoms: JSON.parse(obj.symptoms || '[]')
      };
    });
  } catch (err) {
    console.warn('Fallback to INITIAL_DISEASES:', err);
    return INITIAL_DISEASES;
  }
}

export async function addDisease(disease: Omit<Disease, 'id'>): Promise<Disease> {
  const newId = 'disease_' + Date.now();
  const newObj = { id: newId, ...disease };
  try {
    const database = await getDb();
    if (database) {
      database.run(
        `INSERT INTO diseases (id, name, localNames, targetAnimal, category, description, causes, symptoms, treatment, prevention, vaccination, severity, imageUrl)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          newId,
          disease.name,
          disease.localNames || '',
          disease.targetAnimal,
          disease.category,
          disease.description,
          disease.causes,
          JSON.stringify(disease.symptoms),
          disease.treatment,
          disease.prevention,
          disease.vaccination,
          disease.severity,
          disease.imageUrl || ''
        ]
      );
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to insert disease to SQLite:', err);
  }
  return newObj;
}

export async function updateDisease(id: string, disease: Partial<Disease>): Promise<boolean> {
  try {
    const database = await getDb();
    if (database) {
      database.run(
        `UPDATE diseases SET name=?, localNames=?, targetAnimal=?, category=?, description=?, causes=?, symptoms=?, treatment=?, prevention=?, vaccination=?, severity=?, imageUrl=? WHERE id=?`,
        [
          disease.name,
          disease.localNames || '',
          disease.targetAnimal,
          disease.category,
          disease.description,
          disease.causes,
          JSON.stringify(disease.symptoms || []),
          disease.treatment,
          disease.prevention,
          disease.vaccination,
          disease.severity,
          disease.imageUrl || '',
          id
        ]
      );
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to update disease in SQLite:', err);
  }
  return true;
}

export async function deleteDisease(id: string): Promise<boolean> {
  try {
    const database = await getDb();
    if (database) {
      database.run(`DELETE FROM diseases WHERE id=?`, [id]);
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to delete disease in SQLite:', err);
  }
  return true;
}

export async function getAllHealthTips(): Promise<HealthTip[]> {
  try {
    const database = await getDb();
    if (!database) return INITIAL_HEALTH_TIPS;
    const res = database.exec('SELECT * FROM health_tips');
    if (!res.length) return INITIAL_HEALTH_TIPS;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return {
        ...obj,
        keyPoints: JSON.parse(obj.keyPoints || '[]')
      };
    });
  } catch (err) {
    console.warn('Fallback to INITIAL_HEALTH_TIPS:', err);
    return INITIAL_HEALTH_TIPS;
  }
}

export async function addHealthTip(tip: Omit<HealthTip, 'id'>): Promise<HealthTip> {
  const newId = 'tip_' + Date.now();
  const newObj = { id: newId, ...tip };
  try {
    const database = await getDb();
    if (database) {
      database.run(
        `INSERT INTO health_tips (id, title, category, season, content, keyPoints) VALUES (?, ?, ?, ?, ?, ?)`,
        [newId, tip.title, tip.category, tip.season || 'All Seasons', tip.content, JSON.stringify(tip.keyPoints)]
      );
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to insert tip:', err);
  }
  return newObj;
}

export async function getAllVaccinations(): Promise<VaccineItem[]> {
  try {
    const database = await getDb();
    if (!database) return INITIAL_VACCINATIONS;
    const res = database.exec('SELECT * FROM vaccinations');
    if (!res.length) return INITIAL_VACCINATIONS;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return obj as VaccineItem;
    });
  } catch (err) {
    console.warn('Fallback to INITIAL_VACCINATIONS:', err);
    return INITIAL_VACCINATIONS;
  }
}

export async function getAllFAQs(): Promise<FAQItem[]> {
  try {
    const database = await getDb();
    if (!database) return INITIAL_FAQS;
    const res = database.exec('SELECT * FROM faqs');
    if (!res.length) return INITIAL_FAQS;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return obj as FAQItem;
    });
  } catch (err) {
    console.warn('Fallback to INITIAL_FAQS:', err);
    return INITIAL_FAQS;
  }
}

export async function saveFeedback(fb: Omit<FeedbackItem, 'id' | 'createdAt'>): Promise<FeedbackItem> {
  const newId = 'fb_' + Date.now();
  const createdAt = new Date().toISOString();
  const item: FeedbackItem = { id: newId, ...fb, createdAt };
  memoryFeedbackStore.unshift(item);

  try {
    const database = await getDb();
    if (database) {
      database.run(
        `INSERT INTO feedback (id, name, district, animalType, rating, comments, suggestions, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [newId, fb.name, fb.district || '', fb.animalType || 'Both', fb.rating, fb.comments, fb.suggestions || '', createdAt]
      );
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to save feedback in SQLite:', err);
  }
  return item;
}

export async function getAllFeedback(): Promise<FeedbackItem[]> {
  try {
    const database = await getDb();
    if (!database) return memoryFeedbackStore;
    const res = database.exec('SELECT * FROM feedback ORDER BY createdAt DESC');
    if (!res.length) return memoryFeedbackStore;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return obj as FeedbackItem;
    });
  } catch (err) {
    return memoryFeedbackStore;
  }
}

export async function saveAnalysisHistory(result: AnalysisResult, animalType: string, symptoms: string[], age?: string, gender?: string): Promise<void> {
  const newId = 'analysis_' + Date.now();
  const analyzedAt = new Date().toISOString();
  const item = { id: newId, animalType, age, gender, symptoms, possibleDisease: result.possibleDisease, confidence: result.confidence, emergencyLevel: result.emergencyLevel, explanation: result.explanation, firstAid: result.firstAid, foodsToGive: result.foodsToGive, foodsToAvoid: result.foodsToAvoid, preventiveMeasures: result.preventiveMeasures, whenToVisitVet: result.whenToVisitVet, analyzedAt };
  memoryAnalysisHistory.unshift(item);

  try {
    const database = await getDb();
    if (database) {
      database.run(
        `INSERT INTO analysis_history (id, animalType, age, gender, symptoms, possibleDisease, confidence, emergencyLevel, explanation, firstAid, foodsToGive, foodsToAvoid, preventiveMeasures, whenToVisitVet, analyzedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          newId,
          animalType,
          age || '',
          gender || '',
          JSON.stringify(symptoms),
          result.possibleDisease,
          result.confidence,
          result.emergencyLevel,
          result.explanation,
          JSON.stringify(result.firstAid),
          JSON.stringify(result.foodsToGive),
          JSON.stringify(result.foodsToAvoid),
          JSON.stringify(result.preventiveMeasures),
          result.whenToVisitVet,
          analyzedAt
        ]
      );
      saveDbToDisk(database);
    }
  } catch (err) {
    console.warn('Failed to save analysis history to SQLite:', err);
  }
}

export async function getAnalysisHistory(): Promise<any[]> {
  try {
    const database = await getDb();
    if (!database) return memoryAnalysisHistory;
    const res = database.exec('SELECT * FROM analysis_history ORDER BY analyzedAt DESC LIMIT 50');
    if (!res.length) return memoryAnalysisHistory;
    const columns = res[0].columns;
    return res[0].values.map(row => {
      const obj: any = {};
      columns.forEach((col, idx) => {
        obj[col] = row[idx];
      });
      return {
        ...obj,
        symptoms: JSON.parse(obj.symptoms || '[]'),
        firstAid: JSON.parse(obj.firstAid || '[]'),
        foodsToGive: JSON.parse(obj.foodsToGive || '[]'),
        foodsToAvoid: JSON.parse(obj.foodsToAvoid || '[]'),
        preventiveMeasures: JSON.parse(obj.preventiveMeasures || '[]')
      };
    });
  } catch (err) {
    return memoryAnalysisHistory;
  }
}

export async function getAdminStats(): Promise<AdminStats> {
  try {
    const history = await getAnalysisHistory();
    const diseases = await getAllDiseases();
    const feedback = await getAllFeedback();

    const diseaseDist: Record<string, number> = {};
    const symptomFreq: Record<string, number> = {};

    history.forEach((h: any) => {
      const disease = h.possibleDisease || 'Unknown';
      diseaseDist[disease] = (diseaseDist[disease] || 0) + 1;

      if (Array.isArray(h.symptoms)) {
        h.symptoms.forEach((s: string) => {
          symptomFreq[s] = (symptomFreq[s] || 0) + 1;
        });
      }
    });

    const totalFeedback = feedback.length;
    const avgRating = totalFeedback > 0 ? feedback.reduce((acc, f) => acc + f.rating, 0) / totalFeedback : 5;

    return {
      totalAnalyses: history.length,
      totalDiseases: diseases.length,
      totalFeedback,
      avgRating: Number(avgRating.toFixed(1)),
      symptomFrequency: symptomFreq,
      diseaseDistribution: diseaseDist
    };
  } catch (err) {
    return {
      totalAnalyses: 0,
      totalDiseases: INITIAL_DISEASES.length,
      totalFeedback: 0,
      avgRating: 5,
      symptomFrequency: {},
      diseaseDistribution: {}
    };
  }
}
