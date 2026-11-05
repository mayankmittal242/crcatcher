import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { company, contact, social } from '../siteConfig.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p>{company.intro}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#products">What We Make</a>
          <a href="#quality">Quality</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Reach us</h4>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <div className="footer__social">
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
