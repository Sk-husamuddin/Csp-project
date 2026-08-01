import React, { useState } from 'react';
import { 
  Syringe, 
  Calculator, 
  ShieldCheck, 
  Sparkles, 
  ShieldAlert,
  Search,
  LayoutGrid,
  Table,
  X,
  AlertCircle
} from 'lucide-react';
import { VaccineItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface VaccinationScheduleProps {
  vaccinations: VaccineItem[];
}

export const VaccinationSchedule: React.FC<VaccinationScheduleProps> = ({ vaccinations }) => {
  const { t, language } = useLanguage();
  const isTe = language === 'te';

  // Calculator State
  const [calfAgeMonths, setCalfAgeMonths] = useState<number>(4);
  const [animalGender, setAnimalGender] = useState<'Female' | 'Male'>('Female');
  const [calculatedSchedule, setCalculatedSchedule] = useState<any[] | null>(null);

  // Search, Filter & View Mode State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'mandatory' | 'pre-monsoon' | 'female'>('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const calculateUpcomingVaccines = () => {
    const list = [];

    // 1. FMD
    if (calfAgeMonths < 4) {
      list.push({
        vaccine: isTe ? 'ఎఫ్ఎమ్డీ టీకా (నోరు-కాళ్ల వ్యాధి / FMD)' : 'FMD Vaccine (Foot & Mouth)',
        dueTime: isTe ? `${4 - calfAgeMonths} నెలల్లో వేయించాలి (4 నెలల వయస్సులో)` : `Due in ${4 - calfAgeMonths} month(s) (At 4 Months of age)`,
        status: isTe ? 'మొదటి మోతాదు టీకా' : 'Upcoming First Dose',
        importance: isTe ? 'సంవత్సరానికి రెండుసార్లు తప్పనిసరి టీకా.' : 'Mandatory biannual immunization.'
      });
    } else {
      list.push({
        vaccine: isTe ? 'ఎఫ్ఎమ్డీ టీకా (నోరు-కాళ్ల వ్యాధి / FMD)' : 'FMD Vaccine (Foot & Mouth)',
        dueTime: isTe ? 'ప్రతి 6 నెలలకు ఒకసారి బూస్టర్ మోతాదు' : 'Booster Due Every 6 Months',
        status: isTe ? 'బూస్టర్ మోతాదు' : 'Booster Scheduled',
        importance: isTe ? 'సంవత్సరానికి రెండుసార్లు తప్పనిసరి బూస్టర్.' : 'Mandatory biannual booster.'
      });
    }

    // 2. HS & BQ (Pre-monsoon May-June)
    if (calfAgeMonths < 6) {
      list.push({
        vaccine: isTe ? 'గొంతువాపు (HS) & జానువుల వాపు (BQ) టీకాలు' : 'HS (Galghotu) & BQ (Black Quarter) Vaccines',
        dueTime: isTe ? `${6 - calfAgeMonths} నెలల్లో వేయించాలి (6 నెలల వయస్సులో)` : `Due in ${6 - calfAgeMonths} month(s) (At 6 Months of age)`,
        status: isTe ? 'వర్షాకాల ముందస్తు మొదటి డోస్' : 'Pre-Monsoon First Dose',
        importance: isTe ? 'వర్షాకాలంలో వచ్చే తీవ్రమైన ప్రాణాంతక రోగాల నుండి రక్షణ.' : 'Protects against acute fatal pre-monsoon infections.'
      });
    } else {
      list.push({
        vaccine: isTe ? 'గొంతువాపు (HS) & జానువుల వాపు (BQ) బూస్టర్ టీకాలు' : 'HS & BQ Annual Boosters',
        dueTime: isTe ? 'ప్రతి సంవత్సరం మే-జూన్ లో వేయించాలి (వర్షాకాలానికి ముందు)' : 'Due Every Year in May-June (Pre-Monsoon)',
        status: isTe ? 'సంవత్సరపు బూస్టర్ టీకా' : 'Annual Pre-Monsoon Booster',
        importance: isTe ? 'వర్షాలు ప్రారంభమయ్యే ముందే అత్యంత కీలకమైన రక్షణ.' : 'Critical protection before heavy rainfall.'
      });
    }

    // 3. Brucella (Female Calves 4-8 months only)
    if (animalGender === 'Female') {
      if (calfAgeMonths >= 4 && calfAgeMonths <= 8) {
        list.push({
          vaccine: isTe ? 'బ్రుసెల్లా టీకా (Brucella S19 Vaccine)' : 'Brucella abortus S19 Vaccine',
          dueTime: isTe ? 'ఇప్పుడే వేయించవచ్చు (4-8 నెలల వయస్సులో)' : 'ELIGIBLE NOW (Ages 4-8 Months)',
          status: isTe ? 'అత్యంత కీలకమైన సమయం' : 'CRITICAL WINDOW',
          importance: isTe ? 'ఈత చెడిపోవడం మరియు గొడ్రాలుదనాన్ని నివారించే ఒకే ఒక్క టీకా.' : 'Single lifetime dose to prevent abortion and infertility.'
        });
      } else if (calfAgeMonths < 4) {
        list.push({
          vaccine: isTe ? 'బ్రుసెల్లా టీకా (Brucella S19 Vaccine)' : 'Brucella abortus S19 Vaccine',
          dueTime: isTe ? `4 నెలల వయస్సు రాగానే వేయించాలి (ఇంకా ${4 - calfAgeMonths} నెలల్లో)` : `Eligible at 4 Months of age (in ${4 - calfAgeMonths} months)`,
          status: isTe ? 'రాబోయే టీకా సమయం' : 'Upcoming Window',
          importance: isTe ? 'ఆడ దూడ టీకా డోస్ కోసం సిద్ధంగా ఉండండి.' : 'Prepare for female calf lifetime dose.'
        });
      } else {
        list.push({
          vaccine: isTe ? 'బ్రుసెల్లా టీకా (Brucella S19 Vaccine)' : 'Brucella abortus S19 Vaccine',
          dueTime: isTe ? '8 నెలల వయస్సు దాటిపోయింది' : 'Passed 8-month window',
          status: isTe ? 'సమయం ముగిసింది' : 'Window Closed',
          importance: isTe ? 'టీకా వేయించకపోతే పశువైద్యుడిని సంప్రదించండి.' : 'Consult veterinarian for adult testing if un-vaccinated.'
        });
      }
    }

    // 4. Goat Pox for LSD
    list.push({
      vaccine: isTe ? 'గోట్ పోక్స్ టీకా (లంబి స్కిన్ / LSD)' : 'Goat Pox Vaccine (for Lumpy Skin Disease)',
      dueTime: isTe ? 'సంవత్సరానికి ఒకసారి వర్షాకాలానికి ముందు' : 'Annual Pre-Monsoon Booster',
      status: isTe ? 'సంవత్సరపు షెడ్యూల్' : 'Annual Schedule',
      importance: isTe ? 'చర్మంపై బొబ్బలు వచ్చే తీవ్రమైన లంబి స్కిన్ వ్యాధి నివారణ.' : 'Prevents severe nodular skin pox outbreaks.'
    });

    setCalculatedSchedule(list);
  };

  // Filter & Search Logic
  const filteredVaccinations = vaccinations.filter((vac) => {
    const ageStr = isTe && vac.ageTe ? vac.ageTe : vac.age;
    const vacName = isTe && vac.vaccineTe ? vac.vaccineTe : vac.vaccine;
    const targetDisease = isTe && vac.targetDiseaseTe ? vac.targetDiseaseTe : vac.targetDisease;
    const freq = isTe && vac.frequencyTe ? vac.frequencyTe : vac.frequency;
    const route = isTe && vac.routeTe ? vac.routeTe : vac.route;
    const dosage = isTe && vac.dosageTe ? vac.dosageTe : (vac.dosage || '');
    const importance = isTe && vac.importanceTe ? vac.importanceTe : vac.importance;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      ageStr.toLowerCase().includes(query) ||
      vacName.toLowerCase().includes(query) ||
      targetDisease.toLowerCase().includes(query) ||
      freq.toLowerCase().includes(query) ||
      route.toLowerCase().includes(query) ||
      dosage.toLowerCase().includes(query) ||
      importance.toLowerCase().includes(query) ||
      vac.vaccine.toLowerCase().includes(query) ||
      vac.targetDisease.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    if (activeFilter === 'mandatory') {
      return (importance.toLowerCase().includes('mandatory') || importance.toLowerCase().includes('తప్పనిసరి') || vac.id === 'vac-1');
    }
    if (activeFilter === 'pre-monsoon') {
      return (freq.toLowerCase().includes('monsoon') || freq.toLowerCase().includes('వర్షాకాల') || vac.id === 'vac-2' || vac.id === 'vac-3');
    }
    if (activeFilter === 'female') {
      return (vac.id === 'vac-4' || ageStr.toLowerCase().includes('female') || ageStr.toLowerCase().includes('ఆడ'));
    }

    return true;
  });

  return (
    <div className={`space-y-10 max-w-6xl mx-auto pb-12 ${isTe ? 'font-telugu' : ''}`}>
      
      {/* Header Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 space-y-3">
        <div className="flex items-center gap-2">
          <Syringe className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 block">
            {t('app.title')}
          </span>
        </div>
        <h1 className={`text-2xl sm:text-4xl font-bold text-slate-900 leading-tight ${isTe ? 'font-telugu' : 'font-serif'}`}>
          {t('vaccines.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t('vaccines.subtitle')}
        </p>

        {/* Disclaimer Note */}
        <div className="mt-4 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-amber-950 text-xs sm:text-sm leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-amber-950 mb-0.5">
              {t('vaccines.vetDisclaimerTitle')}
            </strong>
            <span>
              {t('vaccines.vetDisclaimerBody')}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Vaccination Age Calculator */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
              {t('vaccines.interactiveTool')}
            </span>
            <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
              {t('vaccines.calcTitle')}
            </h2>
          </div>
          <Calculator className="w-6 h-6 text-emerald-600 shrink-0" />
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {t('vaccines.calcDesc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('vaccines.ageLabel')}</label>
            <input
              type="number"
              min="1"
              max="120"
              value={calfAgeMonths}
              onChange={(e) => setCalfAgeMonths(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('vaccines.genderLabel')}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAnimalGender('Female')}
                className={`py-3 px-3 rounded-2xl text-xs font-bold border transition-all ${
                  animalGender === 'Female' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                }`}
              >
                {t('vaccines.femaleCalf')}
              </button>
              <button
                type="button"
                onClick={() => setAnimalGender('Male')}
                className={`py-3 px-3 rounded-2xl text-xs font-bold border transition-all ${
                  animalGender === 'Male' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                }`}
              >
                {t('vaccines.maleCalf')}
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={calculateUpcomingVaccines}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('vaccines.calcBtn')}</span>
            </button>
          </div>

        </div>

        {/* Calculated Results */}
        {calculatedSchedule && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4 animate-fade-in">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 block">
              {isTe 
                ? `${calfAgeMonths} నెలల ${animalGender === 'Female' ? 'ఆడ' : 'మగ'} దూడ కోసం టీకాల వివరాలు`
                : `${t('vaccines.resultTitle')} (${calfAgeMonths}-Month Old ${animalGender} Calf)`}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {calculatedSchedule.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`font-bold text-sm sm:text-base text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                      {item.vaccine}
                    </h4>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700">{item.dueTime}</p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item.importance}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive Vaccination Schedule Table / Cards Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Title and View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
              {t('vaccines.officialSchedule')}
            </span>
            <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
              {t('vaccines.tableTitle')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                viewMode === 'table' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>{t('vaccines.tableView')}</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                viewMode === 'cards' ? 'bg-emerald-900 text-white border-emerald-900' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>{t('vaccines.cardsView')}</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('vaccines.searchPlaceholder')}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-10 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeFilter === 'all'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              {t('vaccines.allVaccines')}
            </button>
            <button
              onClick={() => setActiveFilter('mandatory')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeFilter === 'mandatory'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              {t('vaccines.mandatoryFilter')}
            </button>
            <button
              onClick={() => setActiveFilter('pre-monsoon')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeFilter === 'pre-monsoon'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              {t('vaccines.preMonsoonFilter')}
            </button>
            <button
              onClick={() => setActiveFilter('female')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                activeFilter === 'female'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              {t('vaccines.femaleFilter')}
            </button>
          </div>
        </div>

        {/* Results Container */}
        {filteredVaccinations.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-2">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700">{t('vaccines.noResults')}</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="text-xs text-emerald-700 font-bold hover:underline"
            >
              {t('vaccines.resetFilters')}
            </button>
          </div>
        ) : viewMode === 'table' ? (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 rounded-tl-2xl font-bold uppercase tracking-wider text-[10px] min-w-[100px]">{t('vaccines.colAge')}</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[10px] min-w-[150px]">{t('vaccines.colVaccine')}</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[10px] min-w-[150px]">{t('vaccines.colTarget')}</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[10px] min-w-[130px]">{t('vaccines.colFreq')}</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[10px] min-w-[130px]">{t('vaccines.colRoute')}</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-[10px] min-w-[80px]">{t('vaccines.colDosage')}</th>
                  <th className="p-4 rounded-tr-2xl font-bold uppercase tracking-wider text-[10px] min-w-[200px]">{t('vaccines.colImportance')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredVaccinations.map((vac) => {
                  const ageDisp = isTe && vac.ageTe ? vac.ageTe : vac.age;
                  const vacNameDisp = isTe && vac.vaccineTe ? vac.vaccineTe : vac.vaccine;
                  const targetDiseaseDisp = isTe && vac.targetDiseaseTe ? vac.targetDiseaseTe : vac.targetDisease;
                  const freqDisp = isTe && vac.frequencyTe ? vac.frequencyTe : vac.frequency;
                  const routeDisp = isTe && vac.routeTe ? vac.routeTe : vac.route;
                  const dosageDisp = isTe && vac.dosageTe ? vac.dosageTe : (vac.dosage || '2 ml');
                  const importanceDisp = isTe && vac.importanceTe ? vac.importanceTe : vac.importance;

                  return (
                    <tr key={vac.id} className="hover:bg-slate-50/80 transition-colors align-top">
                      <td className={`p-4 font-bold text-slate-900 text-xs sm:text-sm ${isTe ? 'font-telugu' : 'font-serif'}`}>
                        {ageDisp}
                      </td>
                      <td className="p-4 font-bold text-emerald-800">
                        {vacNameDisp}
                      </td>
                      <td className="p-4 font-medium text-slate-800">
                        {targetDiseaseDisp}
                      </td>
                      <td className="p-4 text-slate-600 font-medium">
                        {freqDisp}
                      </td>
                      <td className="p-4 text-slate-600 font-medium text-[11px]">
                        {routeDisp}
                      </td>
                      <td className="p-4 text-slate-900 font-bold text-[11px] whitespace-nowrap">
                        {dosageDisp}
                      </td>
                      <td className="p-4 text-slate-600 leading-relaxed max-w-xs">
                        {importanceDisp}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          /* Cards View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredVaccinations.map((vac) => {
              const ageDisp = isTe && vac.ageTe ? vac.ageTe : vac.age;
              const vacNameDisp = isTe && vac.vaccineTe ? vac.vaccineTe : vac.vaccine;
              const targetDiseaseDisp = isTe && vac.targetDiseaseTe ? vac.targetDiseaseTe : vac.targetDisease;
              const freqDisp = isTe && vac.frequencyTe ? vac.frequencyTe : vac.frequency;
              const routeDisp = isTe && vac.routeTe ? vac.routeTe : vac.route;
              const dosageDisp = isTe && vac.dosageTe ? vac.dosageTe : (vac.dosage || '2 ml');
              const importanceDisp = isTe && vac.importanceTe ? vac.importanceTe : vac.importance;

              return (
                <div key={vac.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {t('vaccines.colAge')}: {ageDisp}
                      </span>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        {t('vaccines.colDosage')}: {dosageDisp}
                      </span>
                    </div>

                    <h3 className={`font-bold text-base text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                      {vacNameDisp}
                    </h3>

                    <div className="text-xs space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-slate-800 font-medium">
                        <strong>{t('vaccines.colTarget')}:</strong> {targetDiseaseDisp}
                      </p>
                      <p className="text-slate-700">
                        <strong>{t('vaccines.colFreq')}:</strong> {freqDisp}
                      </p>
                      <p className="text-slate-700">
                        <strong>{t('vaccines.colRoute')}:</strong> {routeDisp}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 block text-[11px] mb-0.5">{t('vaccines.colImportance')}:</strong>
                    {importanceDisp}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Critical Vaccination Rules & Guidance for Farmers */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className={`text-lg sm:text-xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('vaccines.importantNotesTitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-emerald-700 font-bold text-xs block">{t('vaccines.note1Title')}</span>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {t('vaccines.note1')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-emerald-700 font-bold text-xs block">{t('vaccines.note2Title')}</span>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {t('vaccines.note2')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
            <span className="text-emerald-700 font-bold text-xs block">{t('vaccines.note3Title')}</span>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {t('vaccines.note3')}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VaccinationSchedule;
