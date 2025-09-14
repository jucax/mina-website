import translations from './translations';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function OwnerOpportunitiesPage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-minaWhite font-mina">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      {/* Hero Section - Using Hero.jsx layout */}
      <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-primary text-minaWhite px-4 py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#144E7A' }}>
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center justify-center md:pl-24">
          <h1 className="text-4xl md:text-6xl font-bold font-mina text-center mb-8 leading-tight">
            <span className="text-5xl md:text-7xl text-minaWhite">{t.ownerOpportunities.headline}</span><br />
            <span className="text-secondary block mt-2 text-3xl md:text-5xl">{t.ownerOpportunities.subheadline}</span>
          </h1>
          <p className="text-lg md:text-xl text-minaLightGray text-center max-w-xl mb-8">
            {t.ownerOpportunities.desc}
          </p>
          <a 
            href="https://expo.dev/accounts/mina-app/projects/mina_app/updates/5b54c682-a3c5-4842-a080-667f268e244e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-400 transition text-lg mb-8"
          >
            {t.ownerOpportunities.cta}
          </a>
        </div>
        
        {/* Right: Video - Using Hero.jsx video structure */}
        <div className="flex-1 flex items-center justify-center w-full h-full mt-12 md:mt-0">
          <video
            src="/assets/owner-registration-mockup-mina-3.webm"
            autoPlay
            muted
            playsInline
            loop
            style={{ width: '40%', height: '40%', objectFit: 'contain', borderRadius: '2rem' }}
          />
        </div>
      </section>

      {/* Features Section - Using Hero.jsx layout */}
      <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-minaWhite px-4 py-24 md:py-32 relative overflow-hidden">
        {/* Left: Features Grid */}
        <div className="flex-1 flex flex-col items-center justify-center md:pl-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-mina">
              {t.ownerOpportunities.featuresTitle}
            </h2>
            <p className="text-lg text-minaGray max-w-2xl mx-auto mb-8">
              {t.ownerOpportunities.featuresDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.ownerOpportunities.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-minaLightGray hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-minaGray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Features Video - Using Hero.jsx video structure */}
        <div className="flex-1 flex items-center justify-center w-full h-full mt-12 md:mt-0">
          <video
            src="/assets/owner-features-mockup-mina-2.webm"
            autoPlay
            muted
            playsInline
            loop
            style={{ width: '40%', height: '40%', objectFit: 'contain', borderRadius: '2rem' }}
          />
        </div>
      </section>

      <Footer id="footer" t={t} />
    </div>
  );
}