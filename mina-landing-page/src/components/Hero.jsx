import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo-slogan-o.png';

export default function Hero({ t }) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    let timeout;
    if (video) {
      const handleEnded = () => {
        timeout = setTimeout(() => {
          video.currentTime = 0;
          video.play();
        }, 7000);
      };
      video.addEventListener('ended', handleEnded);
      return () => {
        video.removeEventListener('ended', handleEnded);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <section id="hero" data-aos="fade-up" className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-primary text-minaWhite px-4 py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#144E7A' }}>
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center justify-center md:pl-24">
        <h1 className="text-5xl md:text-7xl font-bold font-mina text-center mb-8 leading-tight">
          <span className="text-6xl md:text-8xl text-minaWhite">{t.hero.headline}</span><br />
          <span className="text-secondary block mt-2 text-4xl md:text-6xl">{t.hero.subheadline}</span>
        </h1>
        <p className="text-lg md:text-2xl text-minaLightGray text-center max-w-2xl mb-8">
          {t.hero.desc || 'Everything you need to make the most out of your real estate journey. Discover, manage, and connect—all in one place.'}
        </p>
        <Link to="/profile-selection" className="bg-secondary text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-400 transition text-lg mb-16">
          {t.hero.cta}
        </Link>
        <div className="flex flex-row items-center gap-12 mt-2">
          <div className="flex flex-col gap-2">
            <a href="https://expo.dev/accounts/mina-app/projects/mina_app/updates/5b54c682-a3c5-4842-a080-667f268e244e" target="_blank" rel="noopener noreferrer" className="block group"><img src="/assets/appstore-badge.png" alt="Download on the App Store" className="w-44 md:w-52 transition-all duration-200 group-hover:shadow-[6px_6px_0_0_#ff9800] group-hover:border-r-4 group-hover:border-b-4 group-hover:border-orange-400 rounded-xl" /></a>
            <a href="https://expo.dev/accounts/mina-app/projects/mina_app/updates/5b54c682-a3c5-4842-a080-667f268e244e" target="_blank" rel="noopener noreferrer" className="block group"><img src="/assets/googleplay-badge.png" alt="Get it on Google Play" className="w-44 md:w-52 transition-all duration-200 group-hover:shadow-[6px_6px_0_0_#ff9800] group-hover:border-r-4 group-hover:border-b-4 group-hover:border-orange-400 rounded-xl" /></a>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/expo-qr.png" alt="Scan QR code to download Mina app" className="w-32 h-32 bg-white p-2 rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
      {/* Right: App animation/image placeholder */}
      <div className="flex-1 flex items-center justify-center w-full h-full mt-12 md:mt-0">
        <video
          ref={videoRef}
          src="/assets/mina-animation.webm"
          autoPlay
          muted
          playsInline
          style={{ width: '40%', height: '40%', objectFit: 'contain', borderRadius: '2rem' }}
        />
      </div>
    </section>
  );
}
