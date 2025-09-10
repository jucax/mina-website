const properties = [
  {
    id: 1,
    image: '/assets/post-property-2.jpg',
    title: 'Casa Familiar Moderna',
    agent: 'Ana Torres',
    desc: 'Amplia casa de 4 recámaras, 3 baños en un barrio tranquilo. #CasaFamiliar',
    likes: 52,
    comments: 24,
  },
  {
    id: 2,
    image: '/assets/post-property-1.jpg',
    title: 'Loft del Centro',
    agent: 'Luis Perez',
    desc: 'Loft elegante en el corazón de la ciudad. #VidaUrbana',
    likes: 38,
    comments: 15,
  },
  {
    id: 3,
    image: '/assets/post-property-3.jpeg',
    title: 'Villa con Campo de Golf',
    agent: 'Maria Lopez',
    desc: 'Villa de lujo con vista al campo de golf. #VidaGolf',
    likes: 52,
    comments: 24,
  },
  {
    id: 4,
    image: '/assets/post-property-4.jpg',
    title: 'Condominio Pet Friendly',
    agent: 'Carlos Ruiz',
    desc: '¡Trae a tus mascotas! #PetFriendly',
    likes: 65,
    comments: 11,
  },
];

const rotations = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-2'];

export default function PropertyCardsShowcase({ t }) {
  return (
    <section data-aos="fade-up" className="w-full bg-primary/90 py-16 flex justify-center items-center overflow-x-auto">
      <div className="flex gap-8 relative max-w-7xl w-full justify-center">
        {properties.map((p, i) => (
          <div
            key={p.id}
            className={`relative bg-white rounded-2xl shadow-xl p-4 w-64 min-w-[16rem] flex flex-col items-start ${rotations[i]} transition-transform`}
            style={{ zIndex: 10 + i }}
          >
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-3" />
            <div className="font-bold text-primary mb-1">{p.title}</div>
            <div className="text-sm text-minaGray mb-2">por {p.agent}</div>
            <div className="text-sm mb-3">{p.desc}</div>
            <div className="flex gap-4 text-xs text-green-700 font-semibold">
              <span>{p.likes} me gusta</span>
              <span>{p.comments} comentarios</span>
            </div>
          </div>
        ))}
        {/* Floating like icon on the first card */}
        <div className="absolute left-8 bottom-8 z-30">
          <div className="bg-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-2 border-green-200">
            <span className="text-3xl text-green-600">👍</span>
          </div>
        </div>
      </div>
    </section>
  );
}
