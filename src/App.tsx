import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Home } from './components/Home';
import { SymptomChecker } from './components/SymptomChecker';
import { DiseaseLibrary } from './components/DiseaseLibrary';
import { VaccinationSchedule } from './components/VaccinationSchedule';
import { HealthTips } from './components/HealthTips';
import { Emergency } from './components/Emergency';

import { Disease, HealthTip, VaccineItem, FAQItem } from './types';
import { 
  INITIAL_DISEASES, 
  INITIAL_HEALTH_TIPS, 
  INITIAL_VACCINATIONS, 
  INITIAL_FAQS
} from './data/seedData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // App Data States
  const [diseases, setDiseases] = useState<Disease[]>(INITIAL_DISEASES);
  const [healthTips, setHealthTips] = useState<HealthTip[]>(INITIAL_HEALTH_TIPS);
  const [vaccinations, setVaccinations] = useState<VaccineItem[]>(INITIAL_VACCINATIONS);
  const [faqs, setFaqs] = useState<FAQItem[]>(INITIAL_FAQS);

  // Toast System
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Fetch initial data from Express backend SQLite database (with automatic seed fallback)
  const loadData = async () => {
    try {
      const [resDis, resTips, resVac, resFaq] = await Promise.all([
        fetch('/api/diseases').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/api/health-tips').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/api/vaccinations').then(r => r.ok ? r.json() : null).catch(() => null),
        fetch('/api/faqs').then(r => r.ok ? r.json() : null).catch(() => null)
      ]);

      if (resDis && Array.isArray(resDis) && resDis.length > 0) setDiseases(resDis);
      if (resTips && Array.isArray(resTips) && resTips.length > 0) setHealthTips(resTips);
      if (resVac && Array.isArray(resVac) && resVac.length > 0) setVaccinations(resVac);
      if (resFaq && Array.isArray(resFaq) && resFaq.length > 0) setFaqs(resFaq);
    } catch (err) {
      console.info('Backend API offline, using rich seed fallbacks.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Scroll to top when changing active tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Top Essential Educational Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Responsive Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold flex items-center gap-2 border ${
            toast.type === 'success' ? 'bg-emerald-900 text-emerald-100 border-emerald-600' :
            toast.type === 'error' ? 'bg-rose-950 text-rose-100 border-rose-600' :
            'bg-slate-900 text-slate-100 border-slate-700'
          }`}>
            <span>{toast.type === 'success' ? '✅' : toast.type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <Home setActiveTab={setActiveTab} faqs={faqs} />
        )}

        {activeTab === 'checker' && (
          <SymptomChecker setActiveTab={setActiveTab} showToast={showToast} />
        )}

        {activeTab === 'library' && (
          <DiseaseLibrary diseases={diseases} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'vaccines' && (
          <VaccinationSchedule vaccinations={vaccinations} />
        )}

        {activeTab === 'tips' && (
          <HealthTips tips={healthTips} />
        )}

        {activeTab === 'emergency' && (
          <Emergency />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}

export default App;
