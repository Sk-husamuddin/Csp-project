import React from 'react';
import { PhoneCall, Heart, Shield, Award, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t, language } = useLanguage();
  const isTe = language === 'te';

  return (
    <footer className={`bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20 ${isTe ? 'font-telugu' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐄</span>
              <span className="font-serif font-bold text-2xl text-white">
                CowCare<span className="text-emerald-400 italic">.AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('app.subtitle')}. {t('app.disclaimer')}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60 font-medium">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('app.cspBadge')} - {t('footer.freeInitiative')}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('checker')} className="hover:text-emerald-400 transition-colors">
                  {t('nav.checker')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('library')} className="hover:text-emerald-400 transition-colors">
                  {t('nav.library')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('vaccines')} className="hover:text-emerald-400 transition-colors">
                  {t('nav.vaccines')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tips')} className="hover:text-emerald-400 transition-colors">
                  {t('nav.tips')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('emergency')} className="hover:text-emerald-400 transition-colors">
                  {t('nav.emergency')}
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Helplines */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{t('footer.emergencyServices')}</h4>
            <div className="space-y-2 text-xs">
              <a
                href="tel:1962"
                className="flex items-center justify-between bg-rose-950/40 border border-rose-800/60 hover:bg-rose-900/60 text-rose-200 p-3 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-rose-400" />
                  <div>
                    <p className="font-bold">1962 {isTe ? 'ఉచిత కాల్' : 'Toll-Free'}</p>
                    <p className="text-[10px] text-rose-300/80">{isTe ? 'జాతీయ పశు ఆరోగ్య హెల్ప్‌లైన్' : 'National Animal Helpline'}</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{t('footer.importantAdvisory')}</h4>
            <div className="bg-amber-950/30 border border-amber-800/40 p-4 rounded-2xl text-xs text-amber-200/90 leading-relaxed space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>{isTe ? 'కేవలం అవగాహన కోసం మాత్రమే' : 'Educational Use Only'}</span>
              </div>
              <p>
                {t('app.disclaimer')}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CowCare AI. {t('footer.copyright')}</p>
        </div>

      </div>
    </footer>
  );
};
