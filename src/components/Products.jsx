import { GiBasketballJersey, GiHoodie, GiPoloShirt, GiTrousers, GiWeightLiftingUp, GiShirt } from 'react-icons/gi';
import { products } from '../siteConfig.js';

const icons = [GiBasketballJersey, GiHoodie, GiPoloShirt, GiTrousers, GiWeightLiftingUp, GiShirt];

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">What We Make</p>
          <h2>Sportswear for every game</h2>
          <p className="section__lead">
            From the field to the gym, we manufacture clothing that performs. Every product can be made in your colours with your logo.
          </p>
        </div>
        <div className="grid grid--3">
          {products.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={p.title} className="card">
                <div className="card__top">
                  <span className="card__icon"><Icon /></span>
                  <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="tag">{p.tag}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
