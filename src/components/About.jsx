import { company } from '../siteConfig.js';
import { LogoArt } from './Logo.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__visual">
          <LogoArt variant="full" />
        </div>
        <div className="about__text">
          <p className="eyebrow">About Us</p>
          <h2>We make the clothes athletes trust</h2>
          <p>
            {company.name} is a sportswear manufacturing company. We design and produce sports clothing for
            teams, clubs, academies, schools, gyms, corporates and fellow brands.
          </p>
          <p>
            We handle everything under one roof — design, fabric sourcing, printing and stitching — so you get
            consistent quality, fair pricing and on-time delivery. Whether you need 20 jerseys for a local
            tournament or thousands of pieces for your label, we treat every order with the same care.
          </p>
          <ul className="checklist">
            <li>Custom colours, names, numbers and logos</li>
            <li>Sample before bulk production</li>
            <li>All sizes, from kids to adults</li>
            <li>Bulk and private-label manufacturing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
