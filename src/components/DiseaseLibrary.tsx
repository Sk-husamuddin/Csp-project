import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ShieldAlert, 
  AlertCircle, 
  HeartPulse, 
  Sparkles,
  Stethoscope,
  Info
} from 'lucide-react';
import { Disease, AnimalType } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DiseaseLibraryProps {
  diseases: Disease[];
  setActiveTab: (tab: string) => void;
}

export const DiseaseLibrary: React.FC<DiseaseLibraryProps> = ({ diseases, setActiveTab }) => {
  const { t, language } = useLanguage();
  const isTe = language === 'te';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimalFilter, setSelectedAnimalFilter] = useState<AnimalType | 'All'>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [activeModalDisease, setActiveModalDisease] = useState<Disease | null>(null);

  // Standard Categories List
  const categoryKeys = [
    'All',
    'Viral Diseases',
    'Bacterial Diseases',
    'Parasitic Diseases',
    'Fungal Diseases',
    'Nutritional & Metabolic Disorders',
    'Digestive Disorders'
  ];

  const getCategoryText = (category: string) => {
    if (!isTe) {
      if (category === 'Nutritional & Metabolic Disorders') return 'Metabolic Disorders';
      return category;
    }
    switch (category) {
      case 'All': return 'అన్ని వర్గాలు';
      case 'Viral Diseases': return 'వైరల్ వ్యాధులు';
      case 'Bacterial Diseases': return 'బ్యాక్టీరియా వ్యాధులు';
      case 'Parasitic Diseases': return 'పరాన్నజీవుల వ్యాధులు';
      case 'Fungal Diseases': return 'ఫంగల్ వ్యాధులు';
      case 'Nutritional & Metabolic Disorders':
      case 'Metabolic Disorders': return 'జీవక్రియ సంబంధిత వ్యాధులు';
      case 'Digestive Disorders': return 'జీర్ణవ్యవస్థ వ్యాధులు';
      default: return category;
    }
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch (severity) {
      case 'Fatal if untreated':
      case 'Fatal':
        return 'bg-red-600 text-white';
      case 'Severe':
      case 'High':
        return 'bg-orange-600 text-white';
      case 'Moderate':
        return 'bg-amber-600 text-white';
      case 'Mild':
      case 'Low':
      default:
        return 'bg-emerald-600 text-white';
    }
  };

  const getSeverityText = (severity: string) => {
    if (!isTe) {
      if (severity === 'Fatal if untreated') return 'Fatal';
      return severity;
    }
    switch (severity) {
      case 'Low': return 'తక్కువ';
      case 'Mild': return 'స్వల్పం';
      case 'Moderate': return 'మధ్యస్థ';
      case 'High':
      case 'Severe': return 'తీవ్రమైన';
      case 'Fatal if untreated':
      case 'Fatal': return 'ప్రాణాంతకం';
      default: return severity;
    }
  };

  const getTargetAnimalText = (target: string) => {
    if (!isTe) {
      switch (target) {
        case 'Both': return 'Cows & Buffaloes';
        case 'Cow': return 'Cows';
        case 'Buffalo': return 'Buffaloes';
        default: return target;
      }
    }
    switch (target) {
      case 'Both': return 'ఆవులు & గేదెలు';
      case 'Cow': return 'ఆవులు';
      case 'Buffalo': return 'గేదెలు';
      default: return target;
    }
  };

  // Filter logic supporting English and Telugu search
  const filteredDiseases = diseases.filter(disease => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      disease.name.toLowerCase().includes(query) ||
      (disease.nameTe && disease.nameTe.toLowerCase().includes(query)) ||
      (disease.localNames && disease.localNames.toLowerCase().includes(query)) ||
      disease.description.toLowerCase().includes(query) ||
      (disease.descriptionTe && disease.descriptionTe.toLowerCase().includes(query)) ||
      disease.causes.toLowerCase().includes(query) ||
      (disease.causesTe && disease.causesTe.toLowerCase().includes(query)) ||
      disease.symptoms.some(s => s.toLowerCase().includes(query)) ||
      (disease.symptomsTe && disease.symptomsTe.some(s => s.toLowerCase().includes(query)));

    const matchesAnimal = 
      selectedAnimalFilter === 'All' || 
      disease.targetAnimal === 'Both' || 
      disease.targetAnimal === selectedAnimalFilter;

    const matchesCategory = 
      selectedCategoryFilter === 'All' || 
      disease.category === selectedCategoryFilter;

    return matchesSearch && matchesAnimal && matchesCategory;
  });

  return (
    <div className={`space-y-8 max-w-7xl mx-auto pb-12 ${isTe ? 'font-telugu' : ''}`}>
      
      {/* Header Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-700 block">
            {t('diseaseLibrary.title')}
          </span>
          <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-3.5 py-1.5 rounded-full border border-emerald-200">
            {isTe ? '26 పశు వ్యాధుల సమాచారం' : '26 Cattle & Buffalo Diseases'}
          </span>
        </div>
        <h1 className={`text-2xl sm:text-4xl font-bold text-slate-900 leading-snug ${isTe ? 'font-telugu' : 'font-serif'}`}>
          {t('diseaseLibrary.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t('diseaseLibrary.subtitle')}
        </p>

        {/* Educational Disclaimer Box */}
        <div className="mt-4 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-amber-950 text-xs sm:text-sm leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-amber-950">
              {t('diseaseLibrary.disclaimerTitle')}
            </strong>
            {t('diseaseLibrary.disclaimerText')}
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Search Field */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('diseaseLibrary.searchPlaceholder')}
              className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider"
              >
                {t('diseaseLibrary.labels.clearSearch')}
              </button>
            )}
          </div>

          {/* Animal Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-emerald-700 shrink-0" />
            <select
              value={selectedAnimalFilter}
              onChange={(e) => setSelectedAnimalFilter(e.target.value as any)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              <option value="All">{t('diseaseLibrary.labels.allAnimals')}</option>
              <option value="Cow">{t('diseaseLibrary.labels.cows')}</option>
              <option value="Buffalo">{t('diseaseLibrary.labels.buffaloes')}</option>
            </select>
          </div>

          {/* Category Filter Dropdown */}
          <div>
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              {categoryKeys.map(catKey => (
                <option key={catKey} value={catKey}>
                  {getCategoryText(catKey)}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          {categoryKeys.map((catKey) => (
            <button
              key={catKey}
              onClick={() => setSelectedCategoryFilter(catKey)}
              className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-[11px] sm:text-xs ${
                selectedCategoryFilter === catKey
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {getCategoryText(catKey)}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span>
            {t('diseaseLibrary.labels.showingResults')
              .replace('{{count}}', String(filteredDiseases.length))
              .replace('{{total}}', String(diseases.length))}
          </span>
          {(searchQuery || selectedAnimalFilter !== 'All' || selectedCategoryFilter !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedAnimalFilter('All');
                setSelectedCategoryFilter('All');
              }}
              className="text-emerald-700 font-bold hover:underline uppercase tracking-wider text-[11px]"
            >
              {t('diseaseLibrary.labels.resetFilters')}
            </button>
          )}
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredDiseases.map((disease) => {
          const mainTitle = isTe ? (disease.nameTe || disease.name) : disease.name;
          const englishSubTitle = isTe ? disease.name : null;

          const descriptionText = isTe ? (disease.descriptionTe || disease.description) : disease.description;
          const symptomsList = isTe && disease.symptomsTe && disease.symptomsTe.length > 0 ? disease.symptomsTe : disease.symptoms;
          const preventionText = isTe ? (disease.preventionTe || disease.prevention) : disease.prevention;

          return (
            <div
              key={disease.id}
              className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between h-full group"
            >
              {/* Top Card Content */}
              <div className="space-y-4">
                
                {/* 1. Disease Name (Large) & 2. English Subtitle */}
                <div className="space-y-1">
                  <h3 className={`font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug break-words ${
                    isTe ? 'telugu-card-title' : 'font-serif text-xl sm:text-2xl'
                  }`}>
                    {mainTitle}
                  </h3>
                  {englishSubTitle && (
                    <p className="text-xs text-slate-500 font-medium italic">
                      {englishSubTitle}
                    </p>
                  )}
                </div>

                {/* 3. Category Badge & 4. Severity Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                    {getCategoryText(disease.category)}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getSeverityBadgeClass(disease.severity)}`}>
                    {getSeverityText(disease.severity)}
                  </span>
                </div>

                {/* 5. Description */}
                <div className="space-y-1 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('diseaseLibrary.labels.description')}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed break-words font-normal">
                    {descriptionText}
                  </p>
                </div>

                {/* 6. Common Symptoms */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('diseaseLibrary.labels.symptoms')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {symptomsList.slice(0, 3).map((sym, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium leading-tight break-words">
                        {sym}
                      </span>
                    ))}
                    {symptomsList.length > 3 && (
                      <span className="text-[11px] text-emerald-700 font-bold px-1.5 py-0.5 self-center">
                        +{symptomsList.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* 7. Prevention */}
                <div className="space-y-1 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('diseaseLibrary.labels.prevention')}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed break-words font-normal">
                    {preventionText}
                  </p>
                </div>

              </div>

              {/* Card Footer with Button (8. Button) */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div className="text-slate-500 font-medium">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                    {t('diseaseLibrary.labels.target')}
                  </span>
                  <strong className="text-slate-800 text-xs">
                    {getTargetAnimalText(disease.targetAnimal)}
                  </strong>
                </div>

                <button
                  onClick={() => setActiveModalDisease(disease)}
                  className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-full transition-colors tracking-wide text-xs shadow-sm shrink-0 flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{t('diseaseLibrary.labels.learnMore')}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredDiseases.length === 0 && (
        <div className="bg-white p-12 rounded-[32px] border border-slate-100 text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-serif font-bold text-slate-900">
            {isTe ? 'వ్యాధుల వివరాలు లభించలేదు' : 'No diseases match your search'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isTe ? 'దయచేసి మీ సెర్చ్ పదాన్ని మార్చండి లేదా ఫిల్టర్లను రీసెట్ చేయండి.' : 'Try adjusting your search terms or clearing the selected filters.'}
          </p>
        </div>
      )}

      {/* Comprehensive Disease Detail Modal */}
      {activeModalDisease && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[32px] max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6 relative my-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalDisease(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  {getCategoryText(activeModalDisease.category)}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getSeverityBadgeClass(activeModalDisease.severity)}`}>
                  {getSeverityText(activeModalDisease.severity)}
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full">
                  {t('diseaseLibrary.labels.target')}: {getTargetAnimalText(activeModalDisease.targetAnimal)}
                </span>
              </div>

              {/* Title Header */}
              <h2 className={`font-bold text-slate-900 ${isTe ? 'telugu-card-title text-2xl sm:text-3xl' : 'font-serif text-2xl sm:text-3xl'}`}>
                {isTe ? (activeModalDisease.nameTe || activeModalDisease.name) : activeModalDisease.name}
              </h2>
              {isTe && (
                <p className="text-xs sm:text-sm font-medium text-emerald-700">
                  English Name: {activeModalDisease.name}
                </p>
              )}
            </div>

            {/* Educational Disclaimer in Modal */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>{t('diseaseLibrary.disclaimerTitle')}</strong>{' '}
                {t('diseaseLibrary.disclaimerText')}
              </div>
            </div>

            {/* Description */}
            <div className="bg-slate-50 p-5 rounded-2xl space-y-2 border border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {t('diseaseLibrary.labels.description')}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal break-words">
                {isTe ? (activeModalDisease.descriptionTe || activeModalDisease.description) : activeModalDisease.description}
              </p>
            </div>

            {/* Causes */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {t('diseaseLibrary.labels.causes')}
              </span>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed break-words font-normal">
                {isTe ? (activeModalDisease.causesTe || activeModalDisease.causes) : activeModalDisease.causes}
              </div>
            </div>

            {/* Clinical Symptoms */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {t('diseaseLibrary.labels.symptoms')}
              </span>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {(isTe && activeModalDisease.symptomsTe && activeModalDisease.symptomsTe.length > 0 
                    ? activeModalDisease.symptomsTe 
                    : activeModalDisease.symptoms
                  ).map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prevention Strategy */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                {t('diseaseLibrary.labels.prevention')}
              </span>
              <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200/80 text-xs sm:text-sm text-emerald-950 leading-relaxed break-words font-normal">
                {isTe ? (activeModalDisease.preventionTe || activeModalDisease.prevention) : activeModalDisease.prevention}
              </div>
            </div>

            {/* Basic First Aid */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t('diseaseLibrary.labels.firstAid')}
                </span>
              </div>
              <div className="bg-amber-50/90 p-5 rounded-2xl border border-amber-200/90 text-xs sm:text-sm text-amber-950 leading-relaxed break-words font-normal">
                {isTe ? (activeModalDisease.firstAidTe || activeModalDisease.firstAid) : activeModalDisease.firstAid}
              </div>
            </div>

            {/* Veterinary Guidance */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-red-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t('diseaseLibrary.labels.whenToContactVet')}
                </span>
              </div>
              <div className="bg-red-50/80 p-5 rounded-2xl border border-red-200/80 text-xs sm:text-sm text-red-950 leading-relaxed break-words font-normal">
                {isTe ? (activeModalDisease.whenToContactVetTe || activeModalDisease.whenToContactVet) : activeModalDisease.whenToContactVet}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <button
                onClick={() => {
                  setActiveModalDisease(null);
                  setActiveTab('checker');
                }}
                className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('diseaseLibrary.labels.analyzeInAi')}</span>
              </button>

              <button
                onClick={() => setActiveModalDisease(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
              >
                {t('diseaseLibrary.labels.close')}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
