import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import translations from './translations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileSelection from './components/ProfileSelection';

export default function ProfileSelectionPage() {
  const [lang, setLang] = useState('es'); // Default to Spanish
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-minaWhite font-mina">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <ProfileSelection t={t} />
      <Footer id="footer" t={t} />
    </div>
  );
}
