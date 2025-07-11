import { useEffect, useRef } from 'react';

const icons = [
  '/assets/icons-capabilities/1.png',
  '/assets/icons-capabilities/2.png',
  '/assets/icons-capabilities/3.png',
  '/assets/icons-capabilities/4.png',
  '/assets/icons-capabilities/5.png',
  '/assets/icons-capabilities/6.png',
  '/assets/icons-capabilities/7.png',
  '/assets/icons-capabilities/8.png',
  '/assets/icons-capabilities/9.png',
  '/assets/icons-capabilities/10.png',
];

const features = [
  { label: 'Listings' },
  { label: 'Chat' },
  { label: 'Analytics' },
  { label: 'Proposals' },
  { label: 'Notifications' },
  { label: 'Deals' },
  { label: 'Rent & Sell' },
  { label: 'Promote' },
  { label: 'Fast Contact' },
  { label: 'Security' },
];

// Shuffle for the second row
function shuffled(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}
const features2 = shuffled(features);
const icons2 = shuffled(icons);

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
    <section id="capabilities-section" data-aos="fade-up" className="w-full bg-primary/90 py-12 px-0 flex flex-col items-center">
      {/* Top row of icons */}
      <div ref={topRef} className="w-full flex flex-row flex-wrap justify-center gap-x-12 gap-y-8 mb-8 transition-all duration-700 will-change-transform" data-aos="fade-up">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px]">
            <img src={icons[i]} alt={f.label} className="w-14 h-14 mb-2" />
            <div className="text-orange-400 text-base text-center uppercase tracking-wide">{f.label}</div>
          </div>
        ))}
      </div>
      {/* Centered title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-mina w-full" data-aos="fade-up">20+ GAME FORMATS</h2>
      {/* Bottom row of icons */}
      <div ref={bottomRef} className="w-full flex flex-row flex-wrap justify-center gap-x-12 gap-y-8 transition-all duration-700 will-change-transform" data-aos="fade-up">
        {features2.map((f, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px]">
            <img src={icons2[i]} alt={f.label} className="w-14 h-14 mb-2" />
            <div className="text-orange-400 text-base text-center uppercase tracking-wide">{f.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 