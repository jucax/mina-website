import logo from '../assets/logo_login_screen.png';

export default function Footer(props) {
  const { t } = props;
  return (
    <footer {...props} className="w-full bg-primary text-minaWhite py-8 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
      <div className="flex items-center gap-4 min-w-[160px]">
        <img src={logo} alt="Mina Logo" className="h-10 w-auto" />
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
        <a href="#features" className="hover:text-secondary transition">{t?.nav?.features || 'Features'}</a>
        <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
        <a href="#" className="hover:text-secondary transition">Contact</a>
      </div>
      <div className="text-center md:text-right text-sm min-w-[200px]">&copy; {new Date().getFullYear()} Mina Real Estate. All rights reserved.</div>
    </footer>
  );
} 