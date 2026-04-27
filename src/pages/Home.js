import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Award, Headphones } from 'lucide-react';
import { categories, getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
};

const perks = [
  { icon: <Shield size={22} />, title: 'Quality Assured', desc: 'Every piece meets our rigorous quality standards before it reaches your home.' },
  { icon: <Truck size={22} />, title: 'Nationwide Delivery', desc: 'We deliver across Nigeria with care and precision.' },
  { icon: <Award size={22} />, title: 'Premium Materials', desc: 'Solid wood, genuine leather, and top-grade fabrics only.' },
  { icon: <Headphones size={22} />, title: 'Expert Support', desc: 'Our team is always available to help you find the perfect fit.' },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <motion.p
            className="hero__label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Furniture & Interiors
          </motion.p>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Elevate Every <em>Corner</em> of Your Home
          </motion.h1>
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover a curated collection of premium sofas, wardrobes, kitchen sets, and more — crafted for the modern Nigerian home.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link to="/shop" className="btn-accent">
              Shop Collection <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="hero__link">
              About Us <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <p className="section-label">Browse By Category</p>
            <h2 className="section-title">Find Your Style</h2>
            <p className="section-subtitle">
              Explore our full range of interior products across every room in your home.
            </p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link to={`/shop?cat=${cat.id}`} className="category-card">
                  <div className="category-card__img">
                    <img src={cat.image} alt={cat.label} loading="lazy" />
                    <div className="category-card__overlay" />
                  </div>
                  <div className="category-card__label">
                    <span>{cat.label}</span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-section">
        <div className="container">
          <motion.div className="section-header section-header--row" {...fadeUp}>
            <div>
              <p className="section-label">Handpicked For You</p>
              <h2 className="section-title">Featured Collection</h2>
            </div>
            <Link to="/shop" className="btn-outline featured-section__cta">
              View All <ArrowRight size={15} />
            </Link>
          </motion.div>

          <div className="products-grid">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Perks / Why Choose Us */}
      <section className="section perks-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The Everything Interiors Difference</h2>
          </motion.div>

          <div className="perks-grid">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="perk-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="perk-card__icon">{perk.icon}</div>
                <h3 className="perk-card__title">{perk.title}</h3>
                <p className="perk-card__desc">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="banner-cta">
        <div className="container">
          <motion.div
            className="banner-cta__inner"
            {...fadeUp}
          >
            <div className="banner-cta__content">
              <p className="section-label" style={{ color: 'var(--accent-light)' }}>Ready to Transform Your Space?</p>
              <h2 className="banner-cta__title">Your Dream Interior Awaits</h2>
              <p className="banner-cta__desc">
                Browse our full catalogue and order directly via WhatsApp. Fast, simple, and personal.
              </p>
            </div>
            <div className="banner-cta__actions">
              <Link to="/shop" className="btn-accent">
                Shop Now <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/2349061293409"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-cta__wa-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.554 4.112 1.523 5.84L.057 23.515a.5.5 0 00.612.635l5.799-1.52A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.732.979.996-3.638-.234-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
