export default function FeatureHighlight({
  mainImage = "/assets/mockup-dashboard.png",
  overlayImage = "/assets/mockup-property-card.png",
  icon = "💼",
  headline = "Simple property management and live updates for everyone",
  desc = "Keep track of your properties, deals, and communications in one place. Mina makes real estate management easy for agents, owners, and buyers. Get live updates, analytics, and seamless collaboration with your team or clients.",
  readMore = "Read more",
  overlap = 48,
}) {
  return (
    <section className={`w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-16 px-4 max-w-7xl mx-auto relative z-30 ${overlap ? `-mt-[${overlap}px]` : ''}`} data-aos="fade-up">
      {/* LEFT: Device mockups */}
      <div className="relative flex-1 flex items-center justify-center min-w-[220px] max-w-xs">
        {/* Main background image */}
        <img
          src={mainImage}
          alt="Mina App Dashboard Mockup"
          className="rounded-3xl shadow-2xl w-4/5 object-cover"
        />
        {/* Overlapping card */}
        <img
          src={overlayImage}
          alt="Mina Property Card Mockup"
          className="absolute right-4 -bottom-2 w-2/3 rounded-2xl shadow-xl"
        />
      </div>
      {/* RIGHT: Text content */}
      <div className="flex-1 flex flex-col items-start max-w-xl mt-16">
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