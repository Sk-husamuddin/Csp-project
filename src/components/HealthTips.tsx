import React, { useState } from 'react';
import { 
  HeartPulse, 
  Droplet, 
  Sun, 
  CloudRain, 
  Snowflake, 
  CheckCircle2, 
  Calculator, 
  Sparkles, 
  Apple, 
  Home,
  ShieldAlert
} from 'lucide-react';
import { HealthTip } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HealthTipsProps {
  tips: HealthTip[];
}

export const HealthTips: React.FC<HealthTipsProps> = ({ tips }) => {
  const { t, language } = useLanguage();
  const isTe = language === 'te';

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Feed Ration Calculator State
  const [bodyWeight, setBodyWeight] = useState<number>(400); // kg
  const [milkYield, setMilkYield] = useState<number>(10); // Liters/day
  const [rationResult, setRationResult] = useState<any | null>(null);

  const categories = ['All', 'Daily Care', 'Nutrition', 'Water Intake', 'Shelter & Hygiene', 'Seasonal Care'];

  const getCategoryText = (cat: string) => {
    if (!isTe) return cat;
    switch (cat) {
      case 'All': return 'అన్ని వర్గాలు';
      case 'Daily Care': return 'రోజువారీ సంరక్షణ';
      case 'Nutrition': return 'పోషకాహారం';
      case 'Water Intake': return 'నీటి తాగుడు';
      case 'Shelter & Hygiene': return 'కొట్టం & పరిశుభ్రత';
      case 'Seasonal Care': return 'ఋతువుల సంరక్షణ';
      default: return cat;
    }
  };

  const getSeasonText = (season?: string) => {
    if (!season) return '';
    if (!isTe) return season;
    switch (season) {
      case 'All Seasons': return 'అన్ని కాలాలు';
      case 'Summer': return 'వేసవి కాలం';
      case 'Monsoon': return 'వర్షాకాలం';
      case 'Winter': return 'చలికాలం';
      default: return season;
    }
  };

  const filteredTips = selectedCategory === 'All'
    ? tips
    : tips.filter(tip => tip.category === selectedCategory);

  const calculateRation = () => {
    // 3% of body weight = Dry Matter (DM)
    const dmRequirement = Number((bodyWeight * 0.03).toFixed(1)); // kg DM
    
    // 2/3 of DM from Fodder, 1/3 from Concentrate
    const fodderDm = Number((dmRequirement * 0.65).toFixed(1));
    
    // Green fodder (approx 20% DM)
    const greenFodderKg = Number((fodderDm * 0.7 * 5).toFixed(1)); // kg fresh green
    
    // Dry fodder (approx 85% DM)
    const dryFodderKg = Number((fodderDm * 0.3 * 1.2).toFixed(1)); // kg straw


    // Concentrate: Maintenance 1.5kg + 1kg per 2.5L milk
    const maintenanceConc = 1.5;
    const productionConc = Number((milkYield / 2.5).toFixed(1));
    const totalConcentrateKg = Number((maintenanceConc + productionConc).toFixed(1));

    setRationResult({
      dmRequirement,
      greenFodderKg,
      dryFodderKg,
      totalConcentrateKg,
      mineralMixg: 50,
      saltg: 30,
      waterLiters: Math.max(50, Math.round(bodyWeight * 0.1 + milkYield * 3))
    });
  };

  return (
    <div className={`space-y-10 max-w-6xl mx-auto pb-12 ${isTe ? 'font-telugu' : ''}`}>
      
      {/* Header Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 space-y-3">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 block">
          {t('app.title')}
        </span>
        <h1 className={`text-2xl sm:text-4xl font-bold text-slate-900 leading-tight ${isTe ? 'font-telugu' : 'font-serif'}`}>
          {t('tips.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t('tips.subtitle')}
        </p>
      </div>

      {/* Feed & Fodder Ration Calculator */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
            {isTe ? 'ఇంటరాక్టివ్ క్యాలిక్యులేటర్' : 'Interactive Calculator'}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('tips.rationCalcTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('tips.weightLabel')}</label>
            <input
              type="number"
              step="10"
              min="100"
              max="800"
              value={bodyWeight}
              onChange={(e) => setBodyWeight(parseInt(e.target.value) || 300)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-[10px] text-slate-400 block mt-1">
              {isTe ? 'సాధారణ ఆవు: 350-450 కిలోలు, ముర్రా గేదె: 500-600 కిలోలు' : 'Average cow: 350-450kg, Murrah: 500-600kg'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('tips.milkLabel')}</label>
            <input
              type="number"
              step="1"
              min="0"
              max="50"
              value={milkYield}
              onChange={(e) => setMilkYield(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <button
              onClick={calculateRation}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all uppercase tracking-wider"
            >
              {t('tips.calcBtn')}
            </button>
          </div>

        </div>

        {/* Ration Calculation Output Card */}
        {rationResult && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4 animate-fade-in">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 block">
              {isTe
                ? `సిఫార్సు చేసిన రోజువారీ మేత (${bodyWeight}కిలోల పశువు, ${milkYield}లీ పాల దిగుబడి)`
                : `Recommended Daily Ration (${bodyWeight}kg Animal, ${milkYield}L Milk Yield)`}
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-2xl font-bold text-slate-900">{rationResult.greenFodderKg} kg</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('tips.greenFodder')}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-2xl font-bold text-slate-900">{rationResult.dryFodderKg} kg</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('tips.dryStraw')}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-2xl font-bold text-slate-900">{rationResult.totalConcentrateKg} kg</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('tips.concentrate')}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-2xl font-bold text-slate-900">{rationResult.waterLiters} L</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{t('tips.water')}</p>
              </div>
            </div>

            <div className="text-xs text-slate-700 bg-white p-4 rounded-2xl border border-slate-200 font-medium leading-relaxed">
              <strong>{isTe ? 'అవసరమైన మిశ్రమాలు:' : 'Supplements required:'}</strong>{' '}
              {isTe 
                ? 'రోజువారీ దాణాలో 50 గ్రాముల ఖనిజ మిశ్రమం (Mineral Mixture) + 30 గ్రాముల అయోడైజ్డ్ ఉప్పు తప్పనిసరిగా కలపాలి.'
                : 'Add 50g Mineral Mixture + 30g Iodized Salt daily in concentrate meal.'}
            </div>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
              selectedCategory === cat
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-400'
            }`}
          >
            {getCategoryText(cat)}
          </button>
        ))}
      </div>

      {/* Tips Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filteredTips.map((tip) => {
          const titleText = isTe && tip.titleTe ? tip.titleTe : tip.title;
          const categoryText = isTe && tip.categoryTe ? tip.categoryTe : getCategoryText(tip.category);
          const seasonText = isTe && tip.seasonTe ? tip.seasonTe : getSeasonText(tip.season);
          const contentText = isTe && tip.contentTe ? tip.contentTe : tip.content;
          const keyPointsList = isTe && tip.keyPointsTe && tip.keyPointsTe.length > 0 ? tip.keyPointsTe : tip.keyPoints;

          return (
            <div key={tip.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {categoryText}
                  </span>
                  {seasonText && (
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {seasonText}
                    </span>
                  )}
                </div>

                <h3 className={`font-bold text-xl text-slate-900 ${isTe ? 'telugu-card-title' : 'font-serif'}`}>
                  {titleText}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {contentText}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {isTe ? 'ముఖ్యమైన మార్గదర్శకాలు' : 'Guidelines'}
                </span>
                <div className="space-y-2">
                  {keyPointsList.map((kp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="leading-relaxed font-medium">{kp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
