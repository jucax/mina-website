import logo from '/assets/logo_login_screen.png';
let matchMain = logo;
let matchFilter = logo;
try {
  matchMain = require('/assets/mockup-match-main.png');
} catch {}
try {
  matchFilter = require('/assets/mockup-match-filter.png');
} catch {}

export default function MatchSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-20 px-4 max-w-7xl mx-auto relative" data-aos="fade-up">
      {/* LEFT: Text content */}
      <div className="flex-1 flex flex-col items-start max-w-xl mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-mina">
          Find your perfect match with Mina
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🔎</span>
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">Smart Filtering</h3>
              <p className="text-minaGray text-base">Agents and owners can filter properties and deals by location, price, features, and more to find the best matches instantly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl">🤝</span>
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">Perfect Connections</h3>
              <p className="text-minaGray text-base">Mina’s match engine connects agents with the most relevant buyers, sellers, or partners, saving time and maximizing opportunities.</p>
            </div>
          </div>
        </div>
        <a href="#" className="mt-8 text-primary underline font-medium hover:text-secondary transition text-lg">
          Learn more about matching
        </a>
      </div>
      {/* RIGHT: Overlapping phone mockups */}
      <div className="flex-1 flex items-center justify-center relative min-w-[320px] max-w-md">
        {/* Main phone mockup: e.g., Mina match results screen */}
        <img
          src={matchMain}
          alt="Mina Match Results Mockup"
          className="rounded-3xl shadow-2xl w-3/4 object-cover z-10 relative"
        />
        {/* Overlapping phone: e.g., Mina filter screen */}
        <img
          src={matchFilter}
          alt="Mina Match Filter Mockup"
          className="absolute -left-8 top-12 w-2/5 rounded-2xl shadow-xl border-4 border-white z-20"
        />
        {/* Suggestion: Ask user for these screenshots from the Mina app for best results */}
      </div>
    </section>
  );
} 