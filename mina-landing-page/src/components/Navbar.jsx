import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/logo-o.png';

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const flag = lang === 'en' ? '🇺🇸' : '🇲🇽';
  
  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.features, href: '#features' },
    { label: lang === 'es' ? 'Perfiles' : 'Profiles', href: '/profile-selection' },
    { label: t.nav.contact, href: '#footer' },
    { label: lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Policy', href: '/privacy-policy' },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first, then scroll
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        // We're on home page, just scroll
        const id = href.replace('#', '');
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white text-black shadow-md shadow-gray-300/60 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link
          to="/"
          className="flex items-center gap-6 group focus:outline-none"
          aria-label="Go to home"
        >
          <img src={logo} alt="Mina Logo" className="max-h-10" style={{height: '40px', width: 'auto'}} />
          <span className="font-bold text-xl font-mina tracking-wide group-hover:text-secondary transition">Mina Real Estate</span>
        </Link>
        <div className="flex items-center gap-6 ml-auto">
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-secondary transition font-medium"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-secondary transition font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
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
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 animate-fade-in-down text-black">
          {navLinks.map(link => (
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-secondary transition font-medium"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="hover:text-secondary transition font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
}
