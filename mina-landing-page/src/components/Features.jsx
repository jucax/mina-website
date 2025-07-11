const features = [
  {
    icon: '🏡',
    title: 'Easy Listings',
    desc: 'List your property in minutes and reach thousands of buyers or renters instantly.'
  },
  {
    icon: '🤝',
    title: 'Connect Instantly',
    desc: 'Chat and negotiate directly with agents, owners, or buyers in a secure environment.'
  },
  {
    icon: '📊',
    title: 'Smart Insights',
    desc: 'Get real-time analytics and recommendations to make informed decisions.'
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    desc: 'Your data is protected with industry-leading security and privacy standards.'
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-minaWhite py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-mina">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 border border-minaLightGray hover:shadow-xl transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-primary mb-2 text-center">{f.title}</h3>
            <p className="text-minaGray text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 