export default function FeatureHighlight({
  mainImage = "/assets/mockup-property-card.png",
  overlayImage = "/assets/mockup-dashboard.png",
  icon = "💼",
  headline = "Simple property management and live updates for everyone",
  desc = "Keep track of your properties, deals, and communications in one place. Mina makes real estate management easy for agents, owners, and buyers. Get live updates, analytics, and seamless collaboration with your team or clients.",
  readMore = "Read more",
  overlap = 48,
}) {
  return (
    <section className={`w-full flex flex-col lg:flex-row items-center justify-center gap-14 py-16 px-4 max-w-7xl mx-auto relative z-30 mb-32 ${overlap ? `-mt-[${overlap}px]` : ''}`} data-aos="fade-up">
      {/* LEFT: Device mockups */}
      <div className="relative flex-1 flex items-center justify-center min-w-[320px] max-w-2xl gap-8 bg-transparent">
        <img
          src={mainImage}
          alt="Mina App Dashboard Mockup"
          className="rounded-3xl shadow-2xl w-[60%] max-w-[400px] object-cover bg-transparent"
        />
        <img
          src={overlayImage}
          alt="Mina Property Card Mockup"
          className="rounded-2xl shadow-xl w-[40%] max-w-[260px] object-cover bg-transparent"
        />
      </div>
      {/* RIGHT: Text content */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl py-12 text-left">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-mina">
          {headline}
        </h2>
        <p className="text-minaGray text-lg mb-6">
          {desc}
        </p>
        <a href="#" className="text-primary underline font-medium hover:text-secondary transition text-lg">
          {readMore}
        </a>
      </div>
    </section>
  );
} 