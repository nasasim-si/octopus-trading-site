'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import Button from './Button';

const LINKS = [
  ['What we trade', '#trade'],
  ['Import services', '#import'],
  ['Why us', '#why'],
  ['Process', '#process'],
  ['Company', '#about'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="The Octopus Trading, home">
          <Logo />
        </a>
        <nav className="nav__links" aria-label="Main">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav__cta">
          <Button href="#contact">Request a quotation</Button>
        </div>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-menu" className={`menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <Button href="#contact" onClick={() => setOpen(false)}>Request a quotation</Button>
      </div>
    </header>
  );
}
