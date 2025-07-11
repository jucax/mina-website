export default function Testimonials({ t }) {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-minaWhite">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center font-mina">{t.testimonials.headline}</h2>
      <div className="flex flex-col items-center mb-10">
        <div className="flex gap-1 text-yellow-400 text-2xl mb-1">
          {[...Array(4)].map((_, i) => <span key={i}>★</span>)}<span className="text-gray-300">★</span>
        </div>
        <div className="font-bold text-xl text-primary">{t.testimonials.rating}</div>
        <div className="text-minaGray text-sm">{t.testimonials.ratingsCount}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {t.testimonials.cards.map((c, i) => (
          <div key={i} className="bg-minaLightGray/20 rounded-2xl p-8 shadow-lg flex flex-col h-full relative">
            <div className="flex gap-1 text-yellow-400 text-xl mb-2">
              {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
            </div>
            <div className="font-bold text-primary mb-2">{c.title}</div>
            <div className="text-minaGray mb-6 flex-1">{c.text}</div>
            <div className="font-bold text-minaGray mt-auto">{c.user}</div>
            <span className="absolute top-6 right-6 text-4xl text-minaGray/30">“</span>
          </div>
        ))}
      </div>
    </section>
  );
} 