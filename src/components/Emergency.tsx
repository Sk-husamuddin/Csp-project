import React from 'react';
import { 
  PhoneCall, 
  Phone, 
  AlertTriangle, 
  AlertCircle, 
  ShieldAlert, 
  HeartPulse, 
  Thermometer, 
  Activity, 
  Zap, 
  Building2, 
  UserCheck, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  Wind,
  Droplets,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Emergency: React.FC = () => {
  const { t, language } = useLanguage();
  const isTe = language === 'te';

  const steps = [
    { num: '01', key: 'step1' },
    { num: '02', key: 'step2' },
    { num: '03', key: 'step3' },
    { num: '04', key: 'step4' },
    { num: '05', key: 'step5' },
    { num: '06', key: 'step6' },
  ];

  const warningSigns = [
    {
      id: 'notStanding',
      icon: AlertCircle,
      titleKey: 'emergency.warnings.notStanding',
      descKey: 'emergency.warnings.notStandingDesc'
    },
    {
      id: 'bleeding',
      icon: Droplets,
      titleKey: 'emergency.warnings.bleeding',
      descKey: 'emergency.warnings.bleedingDesc'
    },
    {
      id: 'breathing',
      icon: Wind,
      titleKey: 'emergency.warnings.breathing',
      descKey: 'emergency.warnings.breathingDesc'
    },
    {
      id: 'fever',
      icon: Thermometer,
      titleKey: 'emergency.warnings.fever',
      descKey: 'emergency.warnings.feverDesc'
    },
    {
      id: 'bloating',
      icon: AlertTriangle,
      titleKey: 'emergency.warnings.bloating',
      descKey: 'emergency.warnings.bloatingDesc'
    },
    {
      id: 'seizures',
      icon: Zap,
      titleKey: 'emergency.warnings.seizures',
      descKey: 'emergency.warnings.seizuresDesc'
    },
    {
      id: 'snakeBite',
      icon: ShieldAlert,
      titleKey: 'emergency.warnings.snakeBite',
      descKey: 'emergency.warnings.snakeBiteDesc'
    },
    {
      id: 'poisoning',
      icon: Activity,
      titleKey: 'emergency.warnings.poisoning',
      descKey: 'emergency.warnings.poisoningDesc'
    }
  ];

  return (
    <div className={`space-y-10 max-w-6xl mx-auto pb-12 ${isTe ? 'font-telugu' : ''}`}>
      
      {/* Header Banner */}
      <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-slate-100 space-y-3">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 block">
            {t('app.title')} - {t('app.cspBadge')}
          </span>
        </div>
        <h1 className={`text-2xl sm:text-4xl font-bold text-slate-900 leading-tight ${isTe ? 'font-telugu' : 'font-serif'}`}>
          {t('emergency.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {t('emergency.subtitle')}
        </p>
      </div>

      {/* 1. Primary Emergency Helpline Card */}
      <div className="bg-emerald-900 text-white p-6 sm:p-10 rounded-[32px] shadow-xl border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Subtle background graphic accent */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-800/40 rounded-full blur-2xl pointer-events-none"></div>

        <div className="space-y-3 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-200 border border-emerald-700/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('emergency.contacts.helplineBadge')}</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-bold text-white tracking-tight ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('emergency.helplineTitle')}
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-4xl sm:text-6xl font-extrabold text-emerald-300 font-mono tracking-wider">
              {t('emergency.helplineNumber')}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-lg leading-relaxed font-medium">
            {t('emergency.helplineDesc')}
          </p>
        </div>

        <div className="z-10 w-full md:w-auto shrink-0 flex justify-center">
          <a
            href="tel:1962"
            className="w-full md:w-auto bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>{t('emergency.callButton')}</span>
          </a>
        </div>
      </div>

      {/* 2. What To Do During an Emergency */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
            {isTe ? 'ప్రాథమిక మార్గదర్శి' : 'Emergency Guide'}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('emergency.whatToDoTitle')}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t('emergency.whatToDoSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-4 transition-all hover:border-emerald-300 hover:bg-emerald-50/30"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                {step.num}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  {isTe ? `స్టెప్ ${step.num}` : `Step ${step.num}`}
                </span>
                <p className={`text-xs sm:text-sm font-bold text-slate-900 leading-snug ${isTe ? 'font-telugu' : ''}`}>
                  {t(`emergency.steps.${step.key}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Emergency Warning Signs */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 block">
            {isTe ? 'ప్రమాద సూచికలు' : 'Critical Symptoms'}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('emergency.warningSignsTitle')}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t('emergency.warningSignsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {warningSigns.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2.5 flex flex-col justify-between hover:border-rose-300 transition-all hover:shadow-xs"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-bold text-sm sm:text-base text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t(item.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Quick Contact Information */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
            {isTe ? 'సంప్రదింపు వివరాలు' : 'Emergency Contacts'}
          </span>
          <h2 className={`text-xl sm:text-2xl font-bold text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
            {t('emergency.quickContactTitle')}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {t('emergency.quickContactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Animal Husbandry Helpline */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('emergency.contacts.helplineBadge')}
                </span>
                <Phone className="w-5 h-5 text-emerald-700" />
              </div>

              <h3 className={`font-bold text-lg text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                {t('emergency.contacts.helplineName')}
              </h3>

              <p className="text-xl font-mono font-bold text-emerald-800">
                {t('emergency.contacts.helplineDetail')}
              </p>
            </div>

            <a
              href="tel:1962"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-3 rounded-xl transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t('emergency.callButton')}</span>
            </a>
          </div>

          {/* Card 2: Local Veterinary Hospital */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('emergency.contacts.hospitalBadge')}
                </span>
                <Building2 className="w-5 h-5 text-slate-700" />
              </div>

              <h3 className={`font-bold text-lg text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                {t('emergency.contacts.hospitalName')}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t('emergency.contacts.hospitalDetail')}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isTe ? 'ప్రభుత్వ పశువైద్య సేవలు' : 'Government Veterinary Services'}</span>
            </div>
          </div>

          {/* Card 3: Veterinary Officer */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('emergency.contacts.officerBadge')}
                </span>
                <UserCheck className="w-5 h-5 text-slate-700" />
              </div>

              <h3 className={`font-bold text-lg text-slate-900 ${isTe ? 'font-telugu' : 'font-serif'}`}>
                {t('emergency.contacts.officerName')}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t('emergency.contacts.officerDetail')}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isTe ? 'మండల పశువైద్య సర్జన్ (VAS)' : 'Mandal Veterinary Surgeon (VAS)'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Educational Disclaimer */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start sm:items-center gap-4 text-amber-950 shadow-xs">
        <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isTe ? 'font-telugu' : ''}`}>
          {t('emergency.disclaimer')}
        </p>
      </div>

    </div>
  );
};

export default Emergency;
