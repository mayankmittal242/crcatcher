import { FiDroplet, FiLayers, FiShield, FiCheckCircle } from 'react-icons/fi';
import { quality, process } from '../siteConfig.js';

const icons = [FiDroplet, FiLayers, FiShield, FiCheckCircle];

export default function Quality() {
  return (
    <section id="quality" className="section section--dark">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow eyebrow--light">Our Quality</p>
          <h2>Made to last, not just to look good</h2>
          <p className="section__lead">
            Quality is built into every step — from the fabric we choose to the final check before your order ships.
          </p>
        </div>
        <div className="grid grid--4">
          {quality.map((q, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={q.title} className="feature">
                <span className="feature__icon"><Icon /></span>
                <h3>{q.title}</h3>
                <p>{q.text}</p>
              </div>
            );
          })}
        </div>

        <h3 className="process__title">How an order works</h3>
        <ol className="process">
          {process.map((p) => (
            <li key={p.step} className="process__step">
              <span className="process__num">{p.step}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
