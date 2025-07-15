import { useState } from 'react';
import translations from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyBackground from './components/PropertyBackground';
import FeatureHighlight from './components/FeatureHighlight';
import Capabilities from './components/Capabilities';
import MatchSection from './components/MatchSection';
import PropertyCardsShowcase from './components/PropertyCardsShowcase';
import FAQSection from './components/FAQSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <div className="min-h-screen flex flex-col bg-minaWhite font-mina">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Features t={t} />
      {/* Pull FeatureHighlight up to overlap PropertyBackground */}
      <div className="-mb-40">
        <PropertyBackground overlap={48} pushDown={180} />
      </div>
      <FeatureHighlight
        mainImage="/assets/owner-mockup-1.png"
        overlayImage="/assets/owner-mockup-2.png"
        icon="🏡"
        overlap={48}
        t={t}
        sectionKey="ownerSection"
        data-aos="fade-up"
      />
      <Capabilities t={t} />
      <MatchSection t={t} />
      {/* Pull FeatureHighlight up to overlap PropertyBackground */}
      <div className="-mb-40">
        <PropertyBackground overlap={48} pushDown={180} bgImage="/assets/propertyu-bg-2.jpg" />
      </div>
      <FeatureHighlight
        mainImage="/assets/agent-mockup-1.png"
        overlayImage="/assets/agent-mockup-2.png"
        icon="💼"
        overlap={48}
        t={t}
        sectionKey="agentSection"
        data-aos="fade-up"
      />
      <PropertyCardsShowcase t={t} />
      <Testimonials t={t} />
      <FAQSection t={t} />
      <CallToAction t={t} data-aos="fade-up" />
      <Footer id="footer" t={t} />
    </div>
  );
}
