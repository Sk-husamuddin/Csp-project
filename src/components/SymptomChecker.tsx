import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Printer, 
  PhoneCall, 
  Loader2, 
  RotateCcw,
  ShieldAlert,
  Apple,
  Info
} from 'lucide-react';
import { SYMPTOMS_LIST } from '../data/seedData';
import { AnalysisInput, AnalysisResult, EmergencyLevel } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SymptomCheckerProps {
  setActiveTab: (tab: string) => void;
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ setActiveTab, showToast }) => {
  const { t, language } = useLanguage();
  const [animalType, setAnimalType] = useState<'Cow' | 'Buffalo'>('Cow');
  const [age, setAge] = useState<string>('Adult (2-6 Yrs)');
  const [gender, setGender] = useState<string>('Female (Milking)');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>('Connecting to Gemini AI...');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const categories = ['General', 'Digestive', 'Respiratory', 'Skin & Udder', 'Reproductive', 'Locomotor & Eye'] as const;

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleAnalyze = async () => {
    if (selectedSymptoms.length === 0) {
      showToast(t('symptomChecker.noSymptomsSelected'), 'error');
      return;
    }

    setLoading(true);
    setResult(null);

    // Simulate animated loading progress steps
    setLoadingStep(language === 'te' ? 'Gemini AI పశువైద్య సలహాలను విశ్లేషిస్తోంది...' : 'Consulting Gemini AI pathology models...');
    setTimeout(() => {
      setLoadingStep(language === 'te' ? 'లక్షణాల తీవ్రత మరియు ప్రాథమిక ప్రథమ చికిత్స లెక్కిస్తోంది...' : 'Evaluating clinical symptoms & emergency level...');
    }, 1200);

    const payload: AnalysisInput = {
      animalType,
      age,
      gender,
      symptoms: selectedSymptoms.map(id => {
        const item = SYMPTOMS_LIST.find(s => s.id === id);
        if (!item) return id;
        return language === 'te' && item.nameTe ? `${item.name} (${item.nameTe})` : item.name;
      }),
      additionalNotes,
      language
    };

    try {
      const res = await fetch('/api/analyze-symptoms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      if (json.success && json.data) {
        setResult(json.data);
        showToast('Symptom analysis completed.', 'success');
      } else {
        throw new Error(json.error || 'Failed to generate analysis.');
      }
    } catch (err: any) {
      console.error('Analysis error:', err);
      showToast(err.message || 'An error occurred during AI analysis.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setAdditionalNotes('');
    setResult(null);
    showToast('Form reset.', 'info');
  };

  const handlePrint = () => {
    window.print();
  };

  const getEmergencyBadge = (level: EmergencyLevel) => {
    switch (level) {
      case 'Critical':
        return {
          bg: 'bg-red-600 text-white animate-pulse',
          border: 'border-red-500',
          label: language === 'te' ? 'అత్యంత ప్రమాదకరం (CRITICAL)' : 'CRITICAL EMERGENCY'
        };
      case 'High':
        return {
          bg: 'bg-orange-600 text-white',
          border: 'border-orange-500',
          label: language === 'te' ? 'అధిక తీవ్రత (HIGH)' : 'HIGH SEVERITY'
        };
      case 'Moderate':
        return {
          bg: 'bg-amber-600 text-white',
          border: 'border-amber-500',
          label: language === 'te' ? 'మధ్యస్థ తీవ్రత (MODERATE)' : 'MODERATE CONCERN'
        };
      case 'Low':
      default:
        return {
          bg: 'bg-emerald-600 text-white',
          border: 'border-emerald-500',
          label: language === 'te' ? 'సాధారణం (LOW)' : 'LOW / MILD'
        };
    }
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 space-y-3">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 block">{t('app.title')}</span>
        <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 leading-tight">
          {t('symptomChecker.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t('symptomChecker.subtitle')}
        </p>

        {/* Telugu Notice Banner */}
        {language === 'te' && (
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-semibold flex items-center gap-2">
            <span>🇮🇳</span>
            <span>{t('symptomChecker.teluguNotice')}</span>
          </div>
        )}
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm space-y-8">
        
        {/* Step 1: Animal Details */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase text-slate-400 block tracking-wider">
            {t('symptomChecker.step1')}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Animal Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('symptomChecker.animalType')}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAnimalType('Cow')}
                  className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border ${
                    animalType === 'Cow'
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <span className="text-lg">🐄</span> {t('symptomChecker.cow')}
                </button>
                <button
                  type="button"
                  onClick={() => setAnimalType('Buffalo')}
                  className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border ${
                    animalType === 'Buffalo'
                      ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <span className="text-lg">🐃</span> {t('symptomChecker.buffalo')}
                </button>
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('symptomChecker.age')}</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Calf (< 6 Months)">Calf (&lt; 6 Months)</option>
                <option value="Young (6 Months - 2 Yrs)">Young (6 Months - 2 Yrs)</option>
                <option value="Adult (2-6 Yrs)">Adult (2 - 6 Yrs)</option>
                <option value="Senior (> 6 Yrs)">Senior (&gt; 6 Yrs)</option>
              </select>
            </div>

            {/* Gender / Production */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('symptomChecker.gender')}</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Female (Milking)">{t('symptomChecker.female')}</option>
                <option value="Male (Bull/Bullock)">{t('symptomChecker.male')}</option>
              </select>
            </div>

          </div>
        </div>

        {/* Step 2: Symptoms Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <label className="text-xs font-bold uppercase text-slate-400 block tracking-wider">
              {t('symptomChecker.step2')}
            </label>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {selectedSymptoms.length} {t('symptomChecker.selectedSymptomsCount')}
            </span>
          </div>

          <div className="space-y-6">
            {categories.map((cat) => {
              const catSymptoms = SYMPTOMS_LIST.filter(s => s.category === cat);
              const categoryNamesTe: Record<string, string> = {
                'General': 'సాధారణం (General)',
                'Digestive': 'జీర్ణవ్యవస్థ (Digestive)',
                'Respiratory': 'శ్వాసకోశం (Respiratory)',
                'Skin & Udder': 'చర్మం & పొదుగు (Skin & Udder)',
                'Reproductive': 'ప్రత్యుత్పత్తి (Reproductive)',
                'Locomotor & Eye': 'కాళ్లు & కళ్లు (Locomotor & Eye)'
              };
              const displayCat = language === 'te' ? (categoryNamesTe[cat] || cat) : cat;

              return (
                <div key={cat} className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                    {displayCat}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {catSymptoms.map((symptom) => {
                      const isSelected = selectedSymptoms.includes(symptom.id);
                      const displayName = language === 'te' && symptom.nameTe ? symptom.nameTe : symptom.name;
                      return (
                        <button
                          key={symptom.id}
                          type="button"
                          onClick={() => toggleSymptom(symptom.id)}
                          className={`px-4 py-2.5 rounded-full border text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                              : 'border-slate-200 text-slate-700 bg-white hover:border-emerald-500'
                          }`}
                        >
                          {isSelected ? '✓ ' : ''}{displayName}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Additional Notes */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider">
            {t('symptomChecker.additionalNotes')}
          </label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder={t('symptomChecker.notesPlaceholder')}
            rows={2}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 px-4 py-2.5 rounded-full hover:bg-slate-100 transition-colors uppercase tracking-wider"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={loading || selectedSymptoms.length === 0}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl transition-all uppercase tracking-wider ${
              loading || selectedSymptoms.length === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200/80 hover:scale-[1.01] active:scale-95'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t('symptomChecker.analyzingBtn')}</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Stethoscope className="w-5 h-5" />
                <span>{t('symptomChecker.analyzeBtn')}</span>
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Loading Overlay Modal */}
      {loading && (
        <div className="bg-emerald-900 text-white p-8 rounded-[32px] border border-emerald-800 text-center space-y-4 shadow-xl animate-fade-in">
          <Loader2 className="w-12 h-12 text-emerald-400 animate-spin mx-auto" />
          <div className="space-y-1">
            <h3 className="text-2xl font-serif italic">{t('symptomChecker.analyzingBtn')}</h3>
            <p className="text-xs text-emerald-300 font-medium">{loadingStep}</p>
          </div>
          <p className="text-[11px] text-emerald-400/80 font-mono">GEMINI VETERINARY AI...</p>
        </div>
      )}

      {/* AI Analysis Result Display Card */}
      {result && !loading && (
        <div className="bg-emerald-900 text-white rounded-[32px] p-8 shadow-xl space-y-8 relative overflow-hidden print:p-0 print:bg-white print:text-slate-900">
          
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Result Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/80 pb-6 relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-300 block">
                {t('symptomChecker.result.title')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {result.possibleDisease}
              </h2>
              <p className="text-xs text-emerald-300 font-mono">
                {t('symptomChecker.result.confidence')}: <strong className="text-white font-bold">{result.confidence}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Emergency Badge */}
              <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm ${getEmergencyBadge(result.emergencyLevel).bg}`}>
                {getEmergencyBadge(result.emergencyLevel).label}
              </div>

              <button
                onClick={handlePrint}
                className="p-2.5 bg-emerald-800 hover:bg-emerald-700 text-emerald-200 rounded-full border border-emerald-700 transition-colors print:hidden"
                title="Print Report"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Clinical Explanation */}
          <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 space-y-2 relative z-10">
            <span className="text-emerald-300 text-[10px] uppercase tracking-widest font-bold block">
              {t('symptomChecker.result.explanation')}
            </span>
            <p className="text-sm leading-relaxed text-emerald-50">
              {result.explanation}
            </p>
          </div>

          {/* First Aid Steps */}
          <div className="space-y-3 relative z-10">
            <span className="text-emerald-300 text-[10px] uppercase font-bold tracking-widest block">
              {t('symptomChecker.result.firstAid')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {result.firstAid.map((step, idx) => (
                <div key={idx} className="bg-emerald-800/40 border border-emerald-700/60 p-4 rounded-2xl flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-emerald-50 leading-relaxed font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Do's and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            {/* Foods to Give */}
            <div className="bg-emerald-800/40 border border-emerald-700/60 p-6 rounded-2xl space-y-3">
              <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest block">
                {t('symptomChecker.result.foodsToGive')}
              </span>
              <ul className="space-y-2 text-xs text-emerald-100">
                {result.foodsToGive.map((food, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foods to Avoid */}
            <div className="bg-emerald-800/40 border border-emerald-700/60 p-6 rounded-2xl space-y-3">
              <span className="text-orange-400 text-[10px] uppercase font-bold tracking-widest block">
                {t('symptomChecker.result.foodsToAvoid')}
              </span>
              <ul className="space-y-2 text-xs text-emerald-100">
                {result.foodsToAvoid.map((food, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Vet Visit Timeline & Preventive Measures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            <div className="bg-emerald-800/40 border border-emerald-700/60 p-6 rounded-2xl space-y-2">
              <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest block">
                {t('symptomChecker.result.whenToVisitVet')}
              </span>
              <p className="text-xs text-white leading-relaxed font-medium">
                {result.whenToVisitVet}
              </p>
            </div>

            <div className="bg-emerald-800/40 border border-emerald-700/60 p-6 rounded-2xl space-y-2">
              <span className="text-emerald-400 text-[10px] uppercase font-bold tracking-widest block">
                {t('symptomChecker.result.prevention')}
              </span>
              <ul className="space-y-1.5 text-xs text-emerald-100">
                {result.preventiveMeasures.map((pm, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{pm}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-emerald-800 flex flex-wrap items-center justify-between gap-4 print:hidden relative z-10">
            <a
              href="tel:1962"
              className="flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t('symptomChecker.result.call1962')}</span>
            </a>

            <button
              onClick={() => setActiveTab('emergency')}
              className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all border border-emerald-700"
            >
              <span>{t('nav.emergency')}</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
