export default function Footer() {
  return (
    <footer className="w-full bg-primary text-minaWhite py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left text-sm">&copy; {new Date().getFullYear()} Mina Real Estate. All rights reserved.</div>
      <div className="flex gap-6 text-sm">
        <a href="#features" className="hover:text-secondary transition">Features</a>
        <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
        <a href="#" className="hover:text-secondary transition">Contact</a>
      </div>
    </footer>
  );
} 