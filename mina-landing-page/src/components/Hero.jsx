import logo from '../assets/logo_login_screen.png';

export default function Hero({ t }) {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-primary text-minaWhite px-4 py-16 relative overflow-hidden">
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
    </section>
  );
} 