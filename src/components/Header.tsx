import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, Moon, Sun, Twitter, X } from 'lucide-react';
import { profile } from '../constants/portfolio';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header = ({ isDarkMode, onToggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-white/60 backdrop-blur'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 text-slate-950">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              NK
            </span>
            <span className="hidden text-sm font-semibold sm:block">Nikil Krishna</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <button
            type="button"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleDarkMode}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-950 hover:text-slate-950 md:ml-0"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-xl lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
