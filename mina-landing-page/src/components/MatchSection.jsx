import locationGraphic from '/assets/location-graphic.png';

export default function MatchSection({ t }) {
  return (
    <section data-aos="fade-up" className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 py-32 px-8 max-w-7xl mx-auto relative overflow-hidden my-32">
      {/* LEFT: Text content */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-md mb-8 lg:mb-0 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-mina">
          {t.matchSection.headline}
        </h2>
        <p className="text-lg text-minaGray mb-6">
          {t.matchSection.desc}
        </p>
        <ul className="list-disc pl-6 text-minaGray mb-6">
          {t.matchSection.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <a href="#" className="mt-4 text-primary underline font-medium hover:text-secondary transition text-lg">
          {t.matchSection.cta}
        </a>
      </div>
      {/* RIGHT: Just the location graphic, larger */}
      <div className="flex-1 flex items-center justify-center w-full max-w-4xl h-[300px] md:h-[600px] z-10">
        <img
          src={locationGraphic}
          alt="Mina Mexico Location Coverage"
          className="w-full h-full object-contain opacity-90 pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 8px 32px rgba(20,78,122,0.18))' }}
        />
      </div>
    </section>
  );
} 