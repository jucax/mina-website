import locationGraphic from '/assets/location-graphic.png';

export default function MatchSection() {
  return (
    <section data-aos="fade-up" className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 py-32 px-8 max-w-7xl mx-auto relative overflow-hidden my-32">
      {/* LEFT: Text content */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-md mb-8 lg:mb-0 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-mina">
          List your property anywhere in Mexico
        </h2>
        <p className="text-lg text-minaGray mb-6">
          With Mina, you can register your property from any city or region in Mexico—right from your phone or computer. Our network of professional agent partners, located throughout the country, are actively searching and reviewing new listings every day. No matter where your property is, Mina connects you with the right agents and buyers nationwide.
        </p>
        <ul className="list-disc pl-6 text-minaGray mb-6">
          <li>Register your property from any location in Mexico</li>
          <li>Get exposure to agents and buyers across the country</li>
          <li>Our agent partners are always looking for new listings</li>
        </ul>
        <a href="#" className="mt-4 text-primary underline font-medium hover:text-secondary transition text-lg">
          Learn more about nationwide listings
        </a>
      </div>
      {/* RIGHT: Just the location graphic, larger */}
      <div className="flex-1 flex items-center justify-center min-w-[850px] max-w-4xl h-[600px] z-10">
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