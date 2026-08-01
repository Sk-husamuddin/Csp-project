import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../translations/en.json';
import teTranslations from '../translations/te.json';

export type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translationsMap: Record<Language, Record<string, any>> = {
  en: enTranslations,
  te: teTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'cowcare_lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved === 'en' || saved === 'te') {
        return saved;
      }
    } catch (e) {
      console.warn('Could not read language preference from localStorage:', e);
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Could not save language preference to localStorage:', e);
    }
  };

  // Helper to safely fetch nested keys e.g. "symptomChecker.categories.fever"
  const getNestedValue = (obj: any, path: string): string | undefined => {
    if (!obj || !path) return undefined;
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return undefined;
      }
    }
    return typeof current === 'string' ? current : undefined;
  };

  const t = (key: string, fallback?: string): string => {
    const currentDict = translationsMap[language];
    let val = getNestedValue(currentDict, key);
    
    // Fallback to English dictionary if key missing in chosen language
    if (!val && language !== 'en') {
      val = getNestedValue(translationsMap.en, key);
    }

    return val || fallback || key;
  };

  useEffect(() => {
    // Update html lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
