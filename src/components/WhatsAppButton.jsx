import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../siteConfig.js';

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
