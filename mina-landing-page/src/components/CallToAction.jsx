export default function CallToAction({ t }) {
  return (
    <section data-aos="fade-up" className="relative w-full bg-secondary py-20 flex justify-center items-center overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl w-full gap-12 px-4">
        {/* Left: Text and buttons */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-mina">{t.cta.headline}</h2>
          <p className="text-lg md:text-xl text-primary mb-8 font-medium">{t.download.subheadline}</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <a href="#" className="block"><img src="/assets/appstore-badge.png" alt={t.download.appstore} className="h-12" /></a>
              <a href="#" className="block"><img src="/assets/googleplay-badge.png" alt={t.download.googleplay} className="h-12" /></a>
            </div>
          </div>
        </div>
        {/* Right: Phone mockup */}
        <div className="flex-1 flex items-center justify-center">
          <img src="/assets/calltoaction-graphic.png" alt="Mina app phone mockup" className="w-58 rounded-3xl" />
        </div>
      </div>
    </section>
  );
} 