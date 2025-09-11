import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // Check localStorage first, then default to Spanish
    const savedLang = localStorage.getItem('mina-language');
    return savedLang || 'es';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mina-language', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
