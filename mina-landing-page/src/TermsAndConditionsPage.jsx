import translations from './translations';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';

export default function TermsAndConditionsPage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-minaWhite font-mina">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <TermsAndConditions t={t} />
      <Footer id="footer" t={t} />
    </div>
  );
}
