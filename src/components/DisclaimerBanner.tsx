import React from 'react';
import { ShieldAlert, Phone, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DisclaimerBanner: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <aside 
      aria-label="Official Veterinary Advisory"
      className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 selection:bg-emerald-800 selection:text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Formal Institutional Advisory Statement */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded shrink-0">
            <ShieldAlert className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">Official Advisory</span>
            <span className="sm:hidden">Notice</span>
          </span>
          <p className="text-[11px] sm:text-xs text-slate-300 truncate sm:whitespace-normal font-normal">
            <span className="font-semibold text-slate-200 hidden md:inline">
              {language === 'te' ? 'పశువైద్య సలహా: ' : 'Veterinary Guidance: '}
            </span>
            {t('app.disclaimer')}
          </p>
        </div>

        {/* Right: 24/7 Helpline & Institutional Badge */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-[11px]">
          <a 
            href="tel:1962" 
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1"
            title="National Animal Helpline (Toll-Free 1962)"
          >
            <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline text-slate-400">Helpline:</span>
            <span className="font-semibold text-emerald-400 font-mono tracking-wider">1962</span>
            <span className="text-[10px] text-slate-400 hidden lg:inline">(Toll-Free)</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-1.5 border-l border-slate-800 pl-3 text-slate-400 text-[11px]">
            <Award className="w-3 h-3 text-emerald-400" />
            <span>{t('app.cspBadge')} Platform</span>
          </div>
        </div>

      </div>
    </aside>
  );
};
