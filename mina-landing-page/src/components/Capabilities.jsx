import { useEffect, useRef } from 'react';

const icons = [
  '/icons-capabilities/1.png', // Listing
  '/icons-capabilities/2.png', // Chat
  '/icons-capabilities/3.png', // Analytics
  '/icons-capabilities/4.png', // Proposals
  '/icons-capabilities/5.png', // Notifications
  '/icons-capabilities/6.png', // Deals
  '/icons-capabilities/7.png', // Rent & Sell
  '/icons-capabilities/8.png', // Promote
  '/icons-capabilities/9.png', // Fast Contact
  '/icons-capabilities/10.png', // Security
];

const features = [
  { label: 'Instant Listings', desc: 'Showcase your property to thousands instantly.' },
  { label: 'Direct Chat', desc: 'Connect and negotiate in real time.' },
  { label: 'Smart Analytics', desc: 'Track your performance and market trends.' },
  { label: 'Personalized Proposals', desc: 'Send and receive tailored offers.' },
  { label: 'Real-Time Alerts', desc: 'Never miss an opportunity with instant notifications.' },
  { label: 'Seamless Deals', desc: 'Close transactions quickly and securely.' },
  { label: 'Rent & Sell Tools', desc: 'All-in-one tools for every real estate need.' },
  { label: 'Boost Your Property', desc: 'Promote listings for maximum exposure.' },
  { label: 'Fast Owner Contact', desc: 'Reach decision-makers directly.' },
  { label: 'Trusted Security', desc: 'Your data and deals are always protected.' },
];

export default function Capabilities() {
  const topRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    // Parallax scroll effect for icon rows
    const handleScroll = () => {
      const section = document.getElementById('capabilities-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate scroll progress within the section (0 to 1)
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      // Move top row left, bottom row right, up to 64px
      const maxOffset = 64;
      if (topRef.current) topRef.current.style.transform = `translateX(${-progress * maxOffset}px)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${progress * maxOffset}px)`;
    };
    // Use requestAnimationFrame for smoothness
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', onScroll);
    handleScroll(); // Initial
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="capabilities-section" className="w-full bg-primary/90 py-12 px-4 flex flex-col items-center">
      <div ref={topRef} className="flex w-full max-w-5xl mx-auto justify-between mb-8 transition-all duration-700 will-change-transform">
        {features.slice(0, 5).map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={icons[i]} alt={f.label} className="w-14 h-14 mb-2" />
            <div className="text-orange-400 font-semibold text-base text-center">{f.label}</div>
            <div className="text-white text-xs text-center">{f.desc}</div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center font-mina" data-aos="fade-up">20+ Real Estate Tools</h2>
      <div ref={bottomRef} className="flex w-full max-w-5xl mx-auto justify-between mt-8 transition-all duration-700 will-change-transform">
        {features.slice(5, 10).map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={icons[i+5]} alt={f.label} className="w-14 h-14 mb-2" />
            <div className="text-orange-400 font-semibold text-base text-center">{f.label}</div>
            <div className="text-white text-xs text-center">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 