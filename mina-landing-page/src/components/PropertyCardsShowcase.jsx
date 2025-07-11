const properties = [
  {
    id: 1,
    image: '/assets/post-property-2.jpg',
    title: 'Modern Family Home',
    agent: 'Ana Torres',
    desc: 'Spacious 4BR, 3BA in a quiet neighborhood. #FamilyHome',
    likes: 52,
    comments: 24,
  },
  {
    id: 2,
    image: '/assets/post-property-1.jpg',
    title: 'Downtown Loft',
    agent: 'Luis Perez',
    desc: 'Stylish loft in the heart of the city. #CityLife',
    likes: 38,
    comments: 15,
  },
  {
    id: 3,
    image: '/assets/post-property-3.jpeg',
    title: 'Golf Course Villa',
    agent: 'Maria Lopez',
    desc: 'Luxury villa with golf course views. #GolfLiving',
    likes: 52,
    comments: 24,
  },
  {
    id: 4,
    image: '/assets/post-property-4.jpg',
    title: 'Pet Friendly Condo',
    agent: 'Carlos Ruiz',
    desc: 'Bring your furry friends! #PetFriendly',
    likes: 65,
    comments: 11,
  },
];

const rotations = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-2'];

export default function PropertyCardsShowcase() {
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
            <div className="text-sm text-minaGray mb-2">by {p.agent}</div>
            <div className="text-sm mb-3">{p.desc}</div>
            <div className="flex gap-4 text-xs text-green-700 font-semibold">
              <span>{p.likes} likes</span>
              <span>{p.comments} comments</span>
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