import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2, Globe, Send } from 'lucide-react';
import './Footer.css';

const shopLinks = [
  { to: '/shop?cat=sofas', label: 'Sofas' },
  { to: '/shop?cat=couches', label: 'Couches' },
  { to: '/shop?cat=wardrobes', label: 'Wardrobes' },
  { to: '/shop?cat=kitchens', label: 'Kitchen Sets' },
  { to: '/shop?cat=tables', label: 'Dining Tables' },
  { to: '/shop?cat=beds', label: 'Beds & Frames' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">EI</span>
            <span className="footer__logo-text">
              Everything <em>Interiors</em>
            </span>
          </div>
          <p className="footer__tagline">
            Transforming spaces into living masterpieces. Premium furniture crafted for the modern Nigerian home.
          </p>
          <div className="footer__socials">
            <a href="https://wa.me/2349061293409" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Send size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Globe size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Shop</h4>
          <ul className="footer__list">
            {shopLinks.map(link => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shop">All Products</Link></li>
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Get in Touch</h4>
          <ul className="footer__list footer__list--contact">
            <li>
              <Phone size={15} />
              <a href="tel:+2349061293409">+234 906 129 3409</a>
            </li>
            <li>
              <Mail size={15} />
              <a href="mailto:chukwudaniel2014@gmail.com">chukwudaniel2014@gmail.com</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Everything Interiors Limited. All rights reserved.</p>
          <p className="footer__credit">Designed with care for exceptional living.</p>
        </div>
      </div>
    </footer>
  );
}
