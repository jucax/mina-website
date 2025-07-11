export default function Features({ t }) {
  return (
    <section id="features" className="w-full bg-minaWhite py-16 px-4 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Owner column */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 text-center md:text-left font-mina">{t.features.owner}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.features.items.slice(0, 2).map((f, i) => (
              <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-minaLightGray hover:shadow-xl transition">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 text-center">{f.title}</h3>
                <p className="text-minaGray text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Agent column */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 text-center md:text-left font-mina">{t.features.agent}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.features.items.slice(2, 4).map((f, i) => (
              <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-minaLightGray hover:shadow-xl transition">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 text-center">{f.title}</h3>
                <p className="text-minaGray text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 