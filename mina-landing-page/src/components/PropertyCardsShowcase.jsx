const rotations = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-2'];

export default function PropertyCardsShowcase({ t }) {
  // Use translations for property data
  const properties = [
    {
      id: 1,
      image: '/assets/post-property-2.jpg',
      title: t.testimonials.cards[0].title,
      agent: t.testimonials.cards[0].user,
      desc: t.testimonials.cards[0].text,
      likes: 52,
      comments: 24,
    },
    {
      id: 2,
      image: '/assets/post-property-1.jpg',
      title: t.testimonials.cards[1].title,
      agent: t.testimonials.cards[1].user,
      desc: t.testimonials.cards[1].text,
      likes: 38,
      comments: 15,
    },
    {
      id: 3,
      image: '/assets/post-property-3.jpeg',
      title: t.testimonials.cards[2].title,
      agent: t.testimonials.cards[2].user,
      desc: t.testimonials.cards[2].text,
      likes: 52,
      comments: 24,
    },
    {
      id: 4,
      image: '/assets/post-property-4.jpg',
      title: t.testimonials.cards[3].title,
      agent: t.testimonials.cards[3].user,
      desc: t.testimonials.cards[3].text,
      likes: 65,
      comments: 11,
    },
  ];

  return (
    <section data-aos="fade-up" className="w-full bg-primary/90 py-16 flex justify-center items-center overflow-x-auto">
      <div className="flex gap-8 relative max-w-7xl w-full justify-center">
        {properties.map((p, i) => (
          <div
            key={p.id}
            className={`relative bg-white rounded-2xl shadow-xl p-4 w-64 min-w-[16rem] flex flex-col items-start ${rotations[i]} transition-transform`}
            style={{ zIndex: 10 + i }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-sm text-gray-600 mb-2">por {p.agent}</p>
            <p className="text-sm text-gray-700 mb-4 flex-1">{p.desc}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 w-full">
              <span className="flex items-center gap-1">
                <span>❤️</span>
                {p.likes} me gusta
              </span>
              <span className="flex items-center gap-1">
                <span>💬</span>
                {p.comments} comentarios
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
