export type AnimalType = 'Cow' | 'Buffalo' | 'Both';

export type GenderType = 'Female (Milking)' | 'Female (Dry)' | 'Male (Bull/Bullock)' | 'Calf';

export type EmergencyLevel = 'Low' | 'Moderate' | 'High' | 'Critical';

export interface SymptomOption {
  id: string;
  name: string;
  nameTe?: string;
  category: 'General' | 'Digestive' | 'Respiratory' | 'Skin & Udder' | 'Reproductive' | 'Locomotor & Eye';
  description?: string;
  icon?: string;
}

export interface AnalysisInput {
  animalType: 'Cow' | 'Buffalo';
  age: string;
  gender: string;
  symptoms: string[];
  additionalNotes?: string;
  language?: 'en' | 'te';
}

export interface AnalysisResult {
  id?: string;
  possibleDisease: string;
  confidence: string;
  explanation: string;
  firstAid: string[];
  foodsToGive: string[];
  foodsToAvoid: string[];
  emergencyLevel: EmergencyLevel;
  preventiveMeasures: string[];
  whenToVisitVet: string;
  analyzedAt?: string;
  animalType?: string;
  symptomsAnalyzed?: string[];
}

export interface Disease {
  id: string;
  name: string;
  nameTe: string;
  targetAnimal: AnimalType;
  category: 'Viral Diseases' | 'Bacterial Diseases' | 'Parasitic Diseases' | 'Fungal Diseases' | 'Nutritional & Metabolic Disorders' | 'Digestive Disorders';
  description: string;
  descriptionTe?: string;
  causes: string;
  causesTe?: string;
  symptoms: string[];
  symptomsTe?: string[];
  prevention: string;
  preventionTe?: string;
  firstAid: string;
  firstAidTe?: string;
  whenToContactVet: string;
  whenToContactVetTe?: string;
  severity: 'Mild' | 'Moderate' | 'Severe' | 'Fatal if untreated';
  treatment?: string;
  vaccination?: string;
  localNames?: string;
  imageUrl?: string;
}

export interface HealthTip {
  id: string;
  title: string;
  titleTe?: string;
  category: 'Daily Care' | 'Nutrition' | 'Water Intake' | 'Shelter & Hygiene' | 'Seasonal Care' | 'Exercise';
  categoryTe?: string;
  content: string;
  contentTe?: string;
  keyPoints: string[];
  keyPointsTe?: string[];
  season?: 'All Seasons' | 'Summer' | 'Monsoon' | 'Winter';
  seasonTe?: string;
}

export interface VaccineItem {
  id: string;
  age: string;
  ageTe?: string;
  vaccine: string;
  vaccineTe?: string;
  targetDisease: string;
  targetDiseaseTe?: string;
  frequency: string;
  frequencyTe?: string;
  route: string;
  routeTe?: string;
  dosage?: string;
  dosageTe?: string;
  importance: string;
  importanceTe?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionTe?: string;
  answer: string;
  answerTe?: string;
  category: string;
}

export interface FeedbackItem {
  id: string;
  name: string;
  district?: string;
  animalType?: string;
  rating: number;
  comments: string;
  suggestions?: string;
  createdAt: string;
}

export interface AdminStats {
  totalAnalyses: number;
  totalDiseases: number;
  totalFeedback: number;
  avgRating: number;
  symptomFrequency: Record<string, number>;
  diseaseDistribution: Record<string, number>;
}
