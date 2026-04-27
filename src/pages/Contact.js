import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import './Contact.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: 'Phone / WhatsApp',
    value: '+234 906 129 3409',
    href: 'tel:+2349061293409',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'chukwudaniel2014@gmail.com',
    href: 'mailto:chukwudaniel2014@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Nigeria',
    href: null,
  },
  {
    icon: <Clock size={20} />,
    label: 'Business Hours',
    value: 'Mon – Sat: 8am – 6pm',
    href: null,
  },
];

export default function Contact() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Everything Interiors! I'd like to make an enquiry.");
    window.open(`https://wa.me/2349061293409?text=${msg}`, '_blank');
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="contact-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            We'd Love to <em>Hear From You</em>
          </motion.h1>
          <motion.p
            className="contact-hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            Have a question about a product, need design advice, or ready to place an order? Reach out — we're here.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container contact-layout">
          {/* Info */}
          <motion.div className="contact-info" {...fadeUp}>
            <p className="section-label">Contact Details</p>
            <h2 className="contact-info__title">Let's Talk Interiors</h2>
            <p className="contact-info__desc">
              Whether you're furnishing a single room or an entire home, we're ready to help. The quickest way to reach us is via WhatsApp.
            </p>

            <div className="contact-details">
              {contactDetails.map(d => (
                <div key={d.label} className="contact-detail-item">
                  <div className="contact-detail-item__icon">{d.icon}</div>
                  <div>
                    <p className="contact-detail-item__label">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="contact-detail-item__value contact-detail-item__link">
                        {d.value}
                      </a>
                    ) : (
                      <p className="contact-detail-item__value">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              className="contact-wa-btn"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          {/* Visual / Map placeholder */}
          <motion.div
            className="contact-visual"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="contact-visual__card">
              <div className="contact-visual__img">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80"
                  alt="Our showroom"
                />
              </div>
              <div className="contact-visual__cta">
                <p className="contact-visual__cta-label">Fastest Response</p>
                <h3 className="contact-visual__cta-title">Order via WhatsApp</h3>
                <p className="contact-visual__cta-desc">
                  Browse our shop, add items to cart, and checkout directly to our WhatsApp. We'll confirm your order within hours.
                </p>
                <button className="contact-wa-btn" onClick={handleWhatsApp}>
                  <MessageCircle size={18} />
                  Start a Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
