import initSqlJs, { Database as SqlJsDatabase } from 'sql.js';
import fs from 'fs';
import path from 'path';
import { INITIAL_DISEASES, INITIAL_HEALTH_TIPS, INITIAL_VACCINATIONS, INITIAL_FAQS } from '../data/seedData';
import { Disease, HealthTip, VaccineItem, FAQItem, FeedbackItem, AnalysisResult, AdminStats } from '../types';

const DB_FILE = path.join(process.cwd(), 'cowcare.sqlite');
let db: SqlJsDatabase | null = null;

export async function getDb(): Promise<SqlJsDatabase> {
  if (db) return db;

  const SQL = await initSqlJs();

  if (fs.existsSync(DB_FILE)) {
    try {
      const fileBuffer = fs.readFileSync(DB_FILE);
      db = new SQL.Database(fileBuffer);
      console.log('Loaded existing SQLite database from disk.');
    } catch (err) {
      console.error('Failed to load existing SQLite database, creating new instance:', err);
      db = new SQL.Database();
    }
  } else {
    db = new SQL.Database();
    console.log('Created new SQLite database instance.');
  }

  initTables(db);
  saveDbToDisk(db);
  return db;
}

function saveDbToDisk(database: SqlJsDatabase) {
  try {
    const data = database.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_FILE, buffer);
  } catch (err) {
    console.error('Failed to save SQLite DB to disk:', err);
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
  return INITIAL_DISEASES;
}

export async function addDisease(disease: Omit<Disease, 'id'>): Promise<Disease> {
  const database = await getDb();
  const newId = 'disease_' + Date.now();
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
  return { id: newId, ...disease };
}

export async function updateDisease(id: string, disease: Partial<Disease>): Promise<boolean> {
  const database = await getDb();
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
  return true;
}

export async function deleteDisease(id: string): Promise<boolean> {
  const database = await getDb();
  database.run(`DELETE FROM diseases WHERE id=?`, [id]);
  saveDbToDisk(database);
  return true;
}

export async function getAllHealthTips(): Promise<HealthTip[]> {
  const database = await getDb();
  const res = database.exec('SELECT * FROM health_tips');
  if (!res.length) return [];
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
}

export async function addHealthTip(tip: Omit<HealthTip, 'id'>): Promise<HealthTip> {
  const database = await getDb();
  const newId = 'tip_' + Date.now();
  database.run(
    `INSERT INTO health_tips (id, title, category, season, content, keyPoints) VALUES (?, ?, ?, ?, ?, ?)`,
    [newId, tip.title, tip.category, tip.season || 'All Seasons', tip.content, JSON.stringify(tip.keyPoints)]
  );
  saveDbToDisk(database);
  return { id: newId, ...tip };
}

export async function getAllVaccinations(): Promise<VaccineItem[]> {
  const database = await getDb();
  const res = database.exec('SELECT * FROM vaccinations');
  if (!res.length) return [];
  const columns = res[0].columns;
  return res[0].values.map(row => {
    const obj: any = {};
    columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    return obj as VaccineItem;
  });
}

export async function getAllFAQs(): Promise<FAQItem[]> {
  const database = await getDb();
  const res = database.exec('SELECT * FROM faqs');
  if (!res.length) return [];
  const columns = res[0].columns;
  return res[0].values.map(row => {
    const obj: any = {};
    columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    return obj as FAQItem;
  });
}

export async function saveFeedback(fb: Omit<FeedbackItem, 'id' | 'createdAt'>): Promise<FeedbackItem> {
  const database = await getDb();
  const newId = 'fb_' + Date.now();
  const createdAt = new Date().toISOString();
  database.run(
    `INSERT INTO feedback (id, name, district, animalType, rating, comments, suggestions, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [newId, fb.name, fb.district || '', fb.animalType || 'Both', fb.rating, fb.comments, fb.suggestions || '', createdAt]
  );
  saveDbToDisk(database);
  return { id: newId, ...fb, createdAt };
}

export async function getAllFeedback(): Promise<FeedbackItem[]> {
  const database = await getDb();
  const res = database.exec('SELECT * FROM feedback ORDER BY createdAt DESC');
  if (!res.length) return [];
  const columns = res[0].columns;
  return res[0].values.map(row => {
    const obj: any = {};
    columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    return obj as FeedbackItem;
  });
}

export async function saveAnalysisHistory(result: AnalysisResult, animalType: string, symptoms: string[], age?: string, gender?: string): Promise<void> {
  const database = await getDb();
  const newId = 'analysis_' + Date.now();
  const analyzedAt = new Date().toISOString();
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

export async function getAnalysisHistory(): Promise<any[]> {
  const database = await getDb();
  const res = database.exec('SELECT * FROM analysis_history ORDER BY analyzedAt DESC LIMIT 50');
  if (!res.length) return [];
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
}

export async function getAdminStats(): Promise<AdminStats> {
  const database = await getDb();

  // Total analyses
  const resAnalyses = database.exec('SELECT COUNT(*) FROM analysis_history');
  const totalAnalyses = (resAnalyses[0]?.values[0]?.[0] as number) || 0;

  // Total diseases
  const resDiseases = database.exec('SELECT COUNT(*) FROM diseases');
  const totalDiseases = (resDiseases[0]?.values[0]?.[0] as number) || 0;

  // Total feedback & avg rating
  const resFb = database.exec('SELECT COUNT(*), AVG(rating) FROM feedback');
  const totalFeedback = (resFb[0]?.values[0]?.[0] as number) || 0;
  const avgRating = (resFb[0]?.values[0]?.[1] as number) || 5;

  // Disease distribution from history
  const history = await getAnalysisHistory();
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

  return {
    totalAnalyses,
    totalDiseases,
    totalFeedback,
    avgRating: Number(avgRating.toFixed(1)),
    symptomFrequency: symptomFreq,
    diseaseDistribution: diseaseDist
  };
}
