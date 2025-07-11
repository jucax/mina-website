import defaultBg from '/assets/property-bg.jpg';

export default function PropertyBackground({ overlap = 0, pushDown = 120, bgImage }) {
  return (
    <section data-aos="fade-up" className="w-full flex justify-center relative !mt-0 !pt-0">
      <div className="relative w-full max-w-7xl flex justify-center" style={{ marginTop: pushDown }}>
        <img
          src={bgImage || defaultBg}
          alt="Property background"
          className="w-full h-64 md:h-96 object-cover object-center rounded-3xl shadow-xl z-0"
          style={{ position: 'relative', top: overlap ? `-${overlap}px` : undefined }}
        />
      </div>
    </section>
  );
} 