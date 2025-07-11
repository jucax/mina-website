import { useState } from 'react';

export default function FAQSection({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section data-aos="fade-up" className="w-full py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center font-mina">{t.faq.title}</h2>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {t.faq.items.map((faq, i) => (
          <div key={i} className="bg-minaLightGray/20 rounded-2xl p-6">
            <button
              className="w-full flex justify-between items-center text-left font-bold text-lg md:text-xl text-primary focus:outline-none"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span>{faq.q}</span>
              <span className="ml-4 text-2xl">{open === i ? '▲' : '▼'}</span>
            </button>
            {open === i && (
              <div className="mt-4 text-base text-primary font-normal animate-fade-in-down">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <a href="#" className="mt-10 text-primary underline font-bold text-lg hover:text-secondary transition">{t.faq.more}</a>
    </section>
  );
} 