export default function Features({ t }) {
  const icons = [
    '/assets/icons-features/12.png',
    '/assets/icons-features/11.png',
    '/assets/icons-features/13.png',
    '/assets/icons-features/14.png',
  ];
  return (
    <section id="features" data-aos="fade-up" className="w-full bg-minaWhite py-16 px-4 flex flex-col items-center mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Owner column */}
        <div>
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-4xl font-bold text-primary text-center font-mina">{t.features.owner}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.features.items.slice(0, 2).map((f, i) => (
              <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-minaLightGray hover:shadow-xl transition h-96">
                <img src={icons[i]} alt={f.title} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">
                  {f.title}
                </h3>
                <p className="text-minaGray text-center flex-1 flex items-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Agent column */}
        <div>
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-4xl font-bold text-primary text-center font-mina">{t.features.agent}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.features.items.slice(2, 4).map((f, i) => (
              <div key={i+2} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-minaLightGray hover:shadow-xl transition h-96">
                <img src={icons[i+2]} alt={f.title} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">{f.title}</h3>
                <p className="text-minaGray text-center flex-1 flex items-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
