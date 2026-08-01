import React, { useState } from 'react';
import { 
  Stethoscope, 
  BookOpen, 
  ShieldAlert, 
  Syringe, 
  HeartPulse, 
  PhoneCall, 
  MessageSquare, 
  Lock, 
  Menu, 
  X, 
  Home as HomeIcon,
  Globe,
  Check
} from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200/80 group-hover:scale-105 transition-transform shrink-0">
              🐄
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-emerald-900">
                  CowCare <span className="text-emerald-500 font-sans font-light italic">AI</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  {t('app.cspBadge')}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 shadow-xs'
                      : item.urgent
                      ? 'text-rose-700 hover:bg-rose-50 font-semibold'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-emerald-700' : item.urgent ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-emerald-600 text-white font-bold text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Language Switcher & Emergency SOS */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-full text-xs sm:text-sm font-semibold text-slate-800 transition-all shadow-xs"
                title="Change Language / భాష ఎంచుకోండి"
              >
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'en' ? '🇬🇧 English' : '🇮🇳 తెలుగు'}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    {t('nav.language')}
                  </div>
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left hover:bg-emerald-50 transition-colors ${
                      language === 'en' ? 'bg-emerald-50/80 text-emerald-900 font-bold' : 'text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇬🇧</span>
                      <span>English</span>
                    </span>
                    {language === 'en' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('te')}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left hover:bg-emerald-50 transition-colors ${
                      language === 'te' ? 'bg-emerald-50/80 text-emerald-900 font-bold' : 'text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🇮🇳</span>
                      <span>తెలుగు</span>
                    </span>
                    {language === 'te' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                </div>
              )}
            </div>

            {/* Emergency SOS Button */}
            <a
              href="tel:1962"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-900/10 shrink-0"
              title="National Animal Helpline 1962"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t('nav.sos')}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-4 space-y-1.5 shadow-xl">
          
          {/* Mobile Language Switcher Options */}
          <div className="flex items-center justify-around bg-slate-50 p-2 rounded-2xl mb-3 border border-slate-200">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                language === 'en' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                language === 'te' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              🇮🇳 తెలుగు
            </button>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
