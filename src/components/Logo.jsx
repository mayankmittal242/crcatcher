import { company } from '../siteConfig.js';
import logoMark from '../assets/logo-mark.png';
import logoFull from '../assets/logo-full.png';

// The logo files are single-colour shapes; CSS paints them in any colour
// (orange on dark backgrounds, black on orange) through a mask.
export function LogoArt({ variant = 'full', className = '' }) {
  const src = variant === 'mark' ? logoMark : logoFull;
  return (
    <span
      role="img"
      aria-label={company.name}
      className={`logo-art logo-art--${variant} ${className}`}
      style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
    />
  );
}

export default function Logo() {
  return (
    <a href="#home" className="logo" aria-label={`${company.name} home`}>
      <LogoArt variant="mark" />
      <span className="logo__word">Catcher</span>
    </a>
  );
}
