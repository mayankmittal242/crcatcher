import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { contact, social } from '../siteConfig.js';

export default function Contact() {
  const items = [
    { icon: FiPhone, label: 'Call us', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${contact.whatsapp}` },
    { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: FiMapPin, label: 'Visit', value: contact.address },
    { icon: FiClock, label: 'Working hours', value: contact.hours },
  ];

  return (
    <section id="contact" className="section section--tint">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Contact Us</p>
          <h2>Let’s make your next kit</h2>
          <p className="section__lead">
            Tell us what you need — the sport, quantity and design — and we’ll get back to you with details and pricing.
          </p>
        </div>
        <div className="contact">
          <ul className="contact__list">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <span className="contact__icon"><Icon /></span>
                <div>
                  <span className="contact__label">{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span className="contact__value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="contact__social">
            <h3>Follow us</h3>
            <p>See our latest work, team kits and new designs.</p>
            <div className="social">
              <a href={social.facebook} target="_blank" rel="noreferrer" className="social__btn social__btn--fb">
                <FaFacebookF /> Facebook
              </a>
              <a href={social.instagram} target="_blank" rel="noreferrer" className="social__btn social__btn--ig">
                <FaInstagram /> Instagram
              </a>
            </div>
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="btn btn--accent contact__call">
              <FiPhone /> Call {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
