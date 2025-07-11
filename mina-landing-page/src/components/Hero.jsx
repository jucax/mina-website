import logo from '/assets/logo_login_screen.png';

export default function Hero({ t }) {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-primary/80 text-minaWhite px-4 py-16 relative overflow-hidden">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center justify-center md:pl-24">
        <img src={logo} alt="Mina Logo" className="w-32 md:w-40 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl md:text-6xl font-bold font-mina text-center mb-4">
          {t.hero.headline}<br />
          <span className="text-secondary">{t.hero.subheadline}</span>
        </h1>
        <p className="text-lg md:text-2xl text-minaLightGray text-center max-w-2xl mb-8">
          {t.hero.desc || 'Everything you need to make the most out of your real estate journey. Discover, manage, and connect—all in one place.'}
        </p>
        <a href="#features" className="bg-secondary text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-400 transition text-lg">
          {t.hero.cta}
        </a>
      </div>
      {/* Right: App animation/image placeholder */}
      <div className="flex-1 flex items-center justify-center w-full h-full mt-12 md:mt-0">
        {/* TODO: Replace with Mina app animation or image */}
        <video
          src="/assets/mina-animation.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '80%', height: '80%', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
} 