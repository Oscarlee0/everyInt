import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addItem, cart } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = cart.some(item => item.id === product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
    >
      <Link to={`/product/${product.id}`} className="product-card__image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <div className="product-card__overlay">
          <span className="product-card__view-btn">
            <Eye size={16} />
            Quick View
          </span>
        </div>
      </Link>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-card__footer">
          <span className="product-card__price">
            ₦{product.price.toLocaleString()}
          </span>
          <motion.button
            className={`product-card__add-btn ${added || inCart ? 'product-card__add-btn--added' : ''}`}
            onClick={handleAdd}
            whileTap={{ scale: 0.92 }}
            aria-label="Add to cart"
          >
            {added || inCart ? <Check size={16} /> : <ShoppingCart size={16} />}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
