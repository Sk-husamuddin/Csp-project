import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DisclaimerBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-amber-900/90 text-amber-100 text-xs sm:text-sm px-4 py-2.5 shadow-inner border-b border-amber-700/50 flex flex-wrap items-center justify-between gap-2">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-center gap-2 text-center sm:text-left">
        <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 animate-pulse" />
        <span>
          {t('app.disclaimer')}
        </span>
        <span className="hidden md:inline-flex items-center gap-1 bg-amber-850/80 px-2.5 py-0.5 rounded-full text-amber-200 text-xs border border-amber-600/40 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" /> {t('app.cspBadge')}
        </span>
      </div>
    </div>
  );
};
