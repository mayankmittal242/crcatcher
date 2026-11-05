import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo.jsx';

const links = [
  { href: '#products', label: 'What We Make' },
  { href: '#quality', label: 'Quality' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--accent nav__cta" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
