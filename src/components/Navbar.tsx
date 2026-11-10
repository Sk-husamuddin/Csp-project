import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  BookOpen, 
  Syringe, 
  HeartPulse, 
  PhoneCall, 
  Menu, 
  X, 
  Home as HomeIcon,
  Globe,
  Check,
  ChevronDown,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: HomeIcon },
    { id: 'checker', label: t('nav.checker'), icon: Stethoscope, badge: 'AI' },
    { id: 'library', label: t('nav.library'), icon: BookOpen },
    { id: 'vaccines', label: t('nav.vaccines'), icon: Syringe },
    { id: 'tips', label: t('nav.tips'), icon: HeartPulse },
    { id: 'emergency', label: t('nav.emergency'), icon: PhoneCall, urgent: true },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [langDropdownOpen]);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          
          {/* ========================================================
              ZONE 1: Formal Brand Identity & Clinical Insignia
              ======================================================== */}
          <div 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
            aria-label="CowCare AI Home"
          >
            {/* Formal Veterinary Crest */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex items-center justify-center shadow-sm border border-emerald-700/50 group-hover:border-emerald-600 transition-colors shrink-0">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-100" 
                stroke="currentColor" 
                strokeWidth="1.9" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Bovine veterinary crest with clinical cross */}
                <path d="M6 4c0 3.5 1.8 6 6 6s6-2.5 6-6" />
                <path d="M8 10v3a4 4 0 0 0 8 0v-3" />
                <path d="M12 17v4" />
                <path d="M9.5 21h5" />
                <circle cx="10" cy="12" r="0.8" fill="currentColor" />
                <circle cx="14" cy="12" r="0.8" fill="currentColor" />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-slate-900 group-hover:text-emerald-900 transition-colors leading-tight">
                  CowCare <span className="text-emerald-700 font-sans font-semibold text-sm sm:text-base">AI</span>
                </span>
                <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                  {t('app.cspBadge')}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-tight truncate max-w-[190px] sm:max-w-xs leading-none mt-1">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          {/* ========================================================
              ZONE 2: Desktop Formal Navigation Links
              ======================================================== */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-950 font-semibold border border-emerald-200/90 shadow-xs'
                      : item.urgent
                      ? 'text-rose-700 hover:bg-rose-50 hover:text-rose-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon 
                    className={`w-4 h-4 shrink-0 ${
                      isActive 
                        ? 'text-emerald-700' 
                        : item.urgent 
                        ? 'text-rose-600' 
                        : 'text-slate-400'
                    }`} 
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-700 text-white uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* ========================================================
              ZONE 3: Utility & Primary Actions (Desktop & Mobile)
              ======================================================== */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Desktop & Tablet Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors shadow-xs"
                title="Select Language / భాష ఎంచుకోండి"
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{language === 'en' ? 'English (EN)' : 'తెలుగు (TE)'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
              </button>

              {/* Mobile Compact Language Quick-Switch Button */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
                className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 active:bg-slate-100"
                title="Switch Language / భాష మార్చండి"
                aria-label={`Current language is ${language === 'en' ? 'English' : 'Telugu'}. Tap to switch.`}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{language === 'en' ? 'EN' : 'తె'}</span>
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95"
                  role="menu"
                >
                  <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    {t('nav.language')}
                  </div>
                  
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    role="menuitem"
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition-colors ${
                      language === 'en' 
                        ? 'bg-emerald-50 text-emerald-950 font-semibold' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇬🇧</span>
                      <span>English</span>
                    </span>
                    {language === 'en' && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                  </button>

                  <button
                    onClick={() => handleLanguageSelect('te')}
                    role="menuitem"
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition-colors ${
                      language === 'te' 
                        ? 'bg-emerald-50 text-emerald-950 font-semibold font-telugu' 
                        : 'text-slate-700 hover:bg-slate-50 font-telugu'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇮🇳</span>
                      <span>తెలుగు</span>
                    </span>
                    {language === 'te' && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                  </button>
                </div>
              )}
            </div>

            {/* Emergency Hotline Button (Desktop) */}
            <a
              href="tel:1962"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg font-semibold text-xs transition-colors shadow-xs shrink-0 tracking-wide focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1"
              title="National Animal Helpline (Toll-Free 1962)"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-200" />
              <span>1962 SOS</span>
            </a>

            {/* Emergency Quick-Dial Icon (Mobile) */}
            <a
              href="tel:1962"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-rose-700 text-white active:bg-rose-800 transition-colors shadow-xs shrink-0"
              title="Call Helpline 1962"
              aria-label="Call Emergency Helpline 1962"
            >
              <PhoneCall className="w-4 h-4 text-white" />
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>

          </div>

        </div>
      </div>

      {/* ========================================================
          MOBILE MENU DRAWER (Formal, neatly aligned & structured)
          ======================================================== */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-white border-b border-slate-200 shadow-xl divide-y divide-slate-100 animate-in slide-in-from-top-2 duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Section A: Formal Language Selection */}
          <div className="px-4 py-3 bg-slate-50/70">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t('nav.language')}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-white text-emerald-950 shadow-xs border border-emerald-300 font-bold'
                    : 'bg-white/60 text-slate-600 border border-slate-200 hover:bg-white'
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
                {language === 'en' && <Check className="w-3 h-3 text-emerald-700 ml-1" />}
              </button>

              <button
                onClick={() => setLanguage('te')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all font-telugu ${
                  language === 'te'
                    ? 'bg-white text-emerald-950 shadow-xs border border-emerald-300 font-bold'
                    : 'bg-white/60 text-slate-600 border border-slate-200 hover:bg-white'
                }`}
              >
                <span>🇮🇳</span>
                <span>తెలుగు</span>
                {language === 'te' && <Check className="w-3 h-3 text-emerald-700 ml-1" />}
              </button>
            </div>
          </div>

          {/* Section B: Navigation Items */}
          <div className="px-3 py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-950 font-bold border-l-4 border-emerald-700 pl-3'
                      : item.urgent
                      ? 'text-rose-700 hover:bg-rose-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-700' : item.urgent ? 'text-rose-600' : 'text-slate-400'}`} />
                    <span className={language === 'te' ? 'font-telugu' : ''}>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="bg-emerald-700 text-white font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-300'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Section C: Emergency 1962 Helpline Card */}
          <div className="p-4 bg-rose-50/60 border-t border-rose-100">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">
                  {language === 'te' ? 'జాతీయ అత్యవసర పశువైద్య సేవ' : 'National Animal Emergency Helpline'}
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {language === 'te' ? 'టోల్-ఫ్రీ 1962 అంబులెన్స్ సేవ' : '24/7 Mobile Veterinary Dispatch (1962)'}
                </span>
              </div>
              <a
                href="tel:1962"
                className="flex items-center gap-1.5 px-3 py-2 bg-rose-700 text-white rounded-lg text-xs font-bold hover:bg-rose-800 transition-colors shadow-xs shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>1962 Call</span>
              </a>
            </div>
          </div>

          {/* Section D: Formal Accreditation Footer */}
          <div className="px-4 py-2.5 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t('app.cspBadge')} Platform</span>
            </span>
            <span className="text-slate-400">v1.2 · Formal Registry</span>
          </div>
        </div>
      )}
    </header>
  );
};
