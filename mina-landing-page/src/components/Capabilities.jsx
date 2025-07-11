import { useEffect, useRef } from 'react';

const topRow = [
  { label: 'Listings', icon: '🏠' },
  { label: 'Chat', icon: '💬' },
  { label: 'Analytics', icon: '📊' },
  { label: 'Calendar', icon: '📅' },
  { label: 'Favorites', icon: '⭐' },
];
const bottomRow = [
  { label: 'Notifications', icon: '🔔' },
  { label: 'Documents', icon: '📄' },
  { label: 'Payments', icon: '💳' },
  { label: 'Teams', icon: '👥' },
  { label: 'Tasks', icon: '✅' },
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
    <section id="capabilities-section" className="w-full bg-green-50 py-12 px-4 flex flex-col items-center">
      <div ref={topRef} className="flex w-full max-w-5xl mx-auto justify-between mb-8 transition-all duration-700 will-change-transform">
        {topRow.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {/* Replace emoji with your own SVG/icon later */}
            <div className="text-5xl mb-2">{c.icon}</div>
            <div className="text-primary font-semibold text-sm md:text-base text-center">{c.label}</div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-mina" data-aos="fade-up">20+ Real Estate Tools</h2>
      <div ref={bottomRef} className="flex w-full max-w-5xl mx-auto justify-between mt-8 transition-all duration-700 will-change-transform">
        {bottomRow.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {/* Replace emoji with your own SVG/icon later */}
            <div className="text-5xl mb-2">{c.icon}</div>
            <div className="text-primary font-semibold text-sm md:text-base text-center">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 