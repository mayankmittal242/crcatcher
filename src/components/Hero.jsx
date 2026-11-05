import { FiArrowRight } from 'react-icons/fi';
import { company } from '../siteConfig.js';
import { LogoArt } from './Logo.jsx';

const ticker = ['Jerseys', 'Tracksuits', 'Team Kits', 'Polos', 'Track Pants', 'Gym Wear', 'Corporate Wear', 'Custom Printing'];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__stripes" aria-hidden="true" />
      <div className="hero__logo" aria-hidden="true"><LogoArt variant="full" /></div>
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">Sportswear Manufacturer</p>
        <h1 className="hero__title">
          {company.tagline.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="accent">{company.tagline.split(' ').slice(-2).join(' ')}</span>
        </h1>
        <p className="hero__text">{company.intro}</p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--accent">
            See What We Make <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn--ghost">Contact Us</a>
        </div>
        <ul className="hero__points">
          <li>Custom designs & logos</li>
          <li>Small to bulk orders</li>
          <li>Quality checked</li>
        </ul>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t} <b>✦</b></span>
          ))}
        </div>
      </div>
    </section>
  );
}
