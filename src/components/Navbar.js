import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${transparent ? 'navbar--transparent' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">EI</span>
          <span className="navbar__logo-text">
            Everything <em>Interiors</em>
          </span>
        </Link>

        <nav className="navbar__links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${pathname === link.to ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart" aria-label="Cart">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="navbar__cart-badge"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.to}
                  className={`navbar__mobile-link ${pathname === link.to ? 'navbar__mobile-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
            >
              <Link to="/cart" className="navbar__mobile-link navbar__mobile-cart">
                <ShoppingCart size={18} />
                Cart
                {totalItems > 0 && (
                  <span className="navbar__cart-badge">{totalItems}</span>
                )}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
