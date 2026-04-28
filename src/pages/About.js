import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Eye } from 'lucide-react';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55 },
};

const values = [
  {
    icon: <Target size={22} />,
    title: 'Our Mission',
    desc: 'To make premium interior design accessible to every Nigerian home, transforming living spaces into personalised masterpieces that reflect individuality and comfort.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Our Vision',
    desc: 'To become Nigeria\'s most trusted interior brand, known for quality, reliability, and exceptional customer experience.',
  },
  {
    icon: <Users size={22} />,
    title: 'Our People',
    desc: 'A passionate team of designers, craftsmen, and customer advocates dedicated to bringing your interior dreams to life.',
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="container about-hero__content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            About Us
          </motion.p>
          <motion.h1
            className="about-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We Are <em>Everything Interiors</em>
          </motion.h1>
          <motion.p
            className="about-hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            A proudly Nigerian brand built on the belief that every home deserves to be beautiful.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story section">
        <div className="container about-story__grid">
          <motion.div className="about-story__image" {...fadeUp}>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80"
              alt="Interior design showroom"
            />
          </motion.div>
          <motion.div className="about-story__text" {...{ ...fadeUp, transition: { duration: 0.55, delay: 0.1 } }}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built on a Passion for Beautiful Living</h2>
            <p>
              Everything Interiors Limited was founded with a simple but powerful conviction: that the spaces we live in shape who we are. Under the leadership of Dr. Daniel Uchenna Chukwu, we set out to bridge the gap between world-class furniture design and the Nigerian market.
            </p>
            <p style={{ marginTop: '16px' }}>
              From our curated sofas and wardrobes to bespoke kitchen sets and dining tables, every product is carefully selected and quality-assured before it reaches your home. We work with trusted production partners to ensure that what you see is exactly what you get — and more.
            </p>
            <p style={{ marginTop: '16px' }}>
              We believe furniture is more than function. It's a statement of who you are. That's why we take every order personally, walking with you from browsing to delivery.
            </p>
            <Link to="/shop" className="btn-primary" style={{ marginTop: '32px' }}>
              Explore Our Collection <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <motion.div className="section-header" style={{ textAlign: 'center', marginBottom: '56px' }} {...fadeUp}>
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title" style={{ margin: '0 auto 12px' }}>Our Core Values</h2>
          </motion.div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
              >
                <div className="about-value-card__icon">{v.icon}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <motion.div className="about-cta" {...fadeUp}>
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Ready to Transform Your Space?</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Browse our collection or reach out to us directly on WhatsApp for personalised recommendations.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn-primary">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
