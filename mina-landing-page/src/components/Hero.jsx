import { useRef, useEffect } from 'react';
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
        <h1 className="text-4xl md:text-6xl font-bold font-mina text-center mb-8 leading-tight">
          {t.hero.headline}<br />
          <span className="text-secondary block mt-2">{t.hero.subheadline}</span><br />
          <span className="text-secondary block">{t.hero.subheadline2}</span>
        </h1>
        <p className="text-lg md:text-2xl text-minaLightGray text-center max-w-2xl mb-8">
          {t.hero.desc || 'Everything you need to make the most out of your real estate journey. Discover, manage, and connect—all in one place.'}
        </p>
        <a href="#features" className="bg-secondary text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-400 transition text-lg mb-8">
          {t.hero.cta}
        </a>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
          <a href="#" className="block group"><img src="/assets/appstore-badge.png" alt="Download on the App Store" className="w-44 md:w-52 transition-all duration-200 group-hover:shadow-[6px_6px_0_0_#ff9800] group-hover:border-r-4 group-hover:border-b-4 group-hover:border-orange-400 rounded-xl" /></a>
          <a href="#" className="block group"><img src="/assets/googleplay-badge.png" alt="Get it on Google Play" className="w-44 md:w-52 transition-all duration-200 group-hover:shadow-[6px_6px_0_0_#ff9800] group-hover:border-r-4 group-hover:border-b-4 group-hover:border-orange-400 rounded-xl" /></a>
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