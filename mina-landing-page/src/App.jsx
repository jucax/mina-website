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
        headline="List Your Property & Receive Proposals Instantly"
        desc="As a property owner, Mina makes it effortless to register your property in just a few steps. Get instant exposure to thousands of qualified agents and buyers. Receive personalized proposals directly from top agents, compare offers, and choose the best deal—all from your dashboard."
        readMore="See how easy it is for owners"
        overlap={48}
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
        headline="Find the Best Properties & Connect Directly with Owners"
        desc="As an agent, Mina gives you access to a powerful property list with advanced filters—search by compensation, location, and more. Stand out by sending personalized proposals to property owners and connect directly to close deals faster. All your opportunities, organized and at your fingertips."
        readMore="Discover Mina for agents"
        overlap={48}
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
