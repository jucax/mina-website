export default function FeatureHighlight({ t, overlap = 48 }) {
  return (
    <section className={`w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-16 px-4 max-w-7xl mx-auto relative z-30 ${overlap ? `-mt-[${overlap}px]` : ''}`} data-aos="fade-up">
      {/* LEFT: Device mockups (replace src with real screenshots from Mina app) */}
      <div className="relative flex-1 flex items-center justify-center min-w-[320px] max-w-md">
        {/* Main background image: e.g., Mina app home or dashboard */}
        <img
          src="/assets/mockup-dashboard.png" // TODO: Replace with actual Mina dashboard screenshot
          alt="Mina App Dashboard Mockup"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />
        {/* Overlapping card: e.g., property details or scorecard */}
        <img
          src="/assets/mockup-property-card.png" // TODO: Replace with actual Mina property card or listing screenshot
          alt="Mina Property Card Mockup"
          className="absolute left-6 -bottom-10 w-2/3 rounded-2xl shadow-xl border-4 border-white"
        />
        {/* Suggestion: Ask user for these screenshots from the Mina app for best results */}
      </div>
      {/* RIGHT: Text content */}
      <div className="flex-1 flex flex-col items-start max-w-xl mt-16">
        <div className="text-4xl mb-4">{t.featureHighlight.icon}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-mina">
          {t.featureHighlight.headline}
        </h2>
        <p className="text-minaGray text-lg mb-6">
          {t.featureHighlight.desc}
        </p>
        <a href="#" className="text-primary underline font-medium hover:text-secondary transition text-lg">
          {t.featureHighlight.readMore}
        </a>
      </div>
    </section>
  );
} 