import { useState } from 'react';
import logo from '/assets/logo_login_screen.png';

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const flag = lang === 'en' ? '🇺🇸' : '🇲🇽';
  const navLinks = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.contact, href: '#footer' },
  ];
  return (
    <nav className="w-full bg-primary text-minaWhite shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Mina Logo" className="max-h-10" style={{height: '40px', width: 'auto'}} />
          <span className="font-bold text-xl font-mina tracking-wide">Mina Real Estate</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-secondary transition font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-2xl md:text-3xl focus:outline-none border-2 border-minaWhite rounded-full px-2 py-1 bg-white/10 hover:bg-white/20 transition"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            aria-label="Switch language"
          >
            {flag}
          </button>
          <button className="md:hidden flex items-center" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-primary px-4 pb-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-secondary transition font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
} 