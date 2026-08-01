import React, { useState } from 'react';
import { 
  Stethoscope, 
  BookOpen, 
  ShieldAlert, 
  Syringe, 
  HeartPulse, 
  PhoneCall, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Activity, 
  Shield, 
  Award,
  AlertTriangle
} from 'lucide-react';
import { FAQItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  faqs: FAQItem[];
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, faqs }) => {
  const { t, language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-12 pb-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-emerald-900 text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-lg border border-emerald-800">
        
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-700 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 border border-emerald-700/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('app.title')} - {t('app.cspBadge')}</span>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-emerald-300 block">
              {t('home.heroTag')}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
              {t('home.heroTitle1')} <span className="italic font-normal text-emerald-300">{t('home.heroTitle2')}</span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
              {t('home.heroDesc')}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('checker')}
              className="flex items-center gap-2.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold px-7 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 text-sm sm:text-base uppercase tracking-wider"
            >
              <Stethoscope className="w-5 h-5" />
              <span>{t('home.ctaChecker')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className="flex items-center gap-2 bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold px-6 py-4 rounded-2xl border border-emerald-600/60 shadow-sm transition-all text-sm sm:text-base"
            >
              <BookOpen className="w-5 h-5 text-emerald-300" />
              <span>{t('home.ctaLibrary')}</span>
            </button>

            <button
              onClick={() => setActiveTab('emergency')}
              className="flex items-center gap-2 bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 font-semibold px-6 py-4 rounded-2xl border border-rose-700/50 shadow-sm transition-all text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5 text-rose-300" />
              <span>{t('home.ctaEmergency')}</span>
            </button>
          </div>

          {/* Essential Disclaimer Reminder Box */}
          <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-2xl p-4 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t('app.disclaimer')}
            </p>
          </div>

        </div>
      </section>

      {/* Community Impact Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0">
            <Users className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">15,000+</p>
            <p className="text-xs text-slate-500 font-medium">{t('home.stats.records')}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0">
            <Activity className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">12 Pathologies</p>
            <p className="text-xs text-slate-500 font-medium">{t('home.stats.diseases')}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0">
            <Shield className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">100% Free</p>
            <p className="text-xs text-slate-500 font-medium">{t('home.stats.tips')}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold shrink-0">
            <Award className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">24/7 Access</p>
            <p className="text-xs text-slate-500 font-medium">{t('home.stats.response')}</p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 block">{t('app.cspBadge')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t('home.features.title')}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t('home.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div 
            onClick={() => setActiveTab('checker')}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center justify-between">
              <span>{t('home.features.f1Title')}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('home.features.f1Desc')}
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('library')}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center justify-between">
              <span>{t('home.features.f2Title')}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('home.features.f2Desc')}
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('vaccines')}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
              <Syringe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center justify-between">
              <span>{t('home.features.f4Title')}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('home.features.f4Desc')}
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('tips')}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center justify-between">
              <span>{t('home.features.f5Title')}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('home.features.f5Desc')}
            </p>
          </div>

        </div>
      </section>

      {/* Emergency Call Banner */}
      <section className="bg-rose-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            {t('home.emergencyBanner.title')}
          </h3>
          <p className="text-rose-100 text-sm max-w-xl font-normal">
            {t('home.emergencyBanner.desc')}
          </p>
        </div>
        <a
          href="tel:1962"
          className="bg-white hover:bg-rose-50 text-rose-950 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wider shrink-0 flex items-center gap-2"
        >
          <PhoneCall className="w-5 h-5 text-rose-700" />
          <span>{t('home.emergencyBanner.callButton')}</span>
        </a>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 block">{t('app.title')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            {t('home.faqs.title')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('home.faqs.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const qText = language === 'te' && faq.questionTe ? faq.questionTe : faq.question;
            const aText = language === 'te' && faq.answerTe ? faq.answerTe : faq.answer;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full flex items-center justify-between p-5 text-left font-bold text-base text-slate-900 hover:bg-slate-50 transition-colors ${language === 'te' ? 'font-telugu' : 'font-serif'}`}
                >
                  <span className="pr-4">{qText}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className={`p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 ${language === 'te' ? 'font-telugu' : ''}`}>
                    {aText}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
