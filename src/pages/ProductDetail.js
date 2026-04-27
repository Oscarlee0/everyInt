import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem, cart, updateQuantity } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const product = getProductById(id);

  if (!product) {
    return (
      <main className="not-found-page">
        <div className="container">
          <h2>Product not found.</h2>
          <Link to="/shop" className="btn-primary" style={{ marginTop: 24 }}>
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const cartItem = cart.find(i => i.id === product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop">Shop</Link>
          <ChevronRight size={14} />
          <Link to={`/shop?cat=${product.category}`} style={{ textTransform: 'capitalize' }}>
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </nav>

        <div className="product-detail__grid">
          {/* Images */}
          <motion.div
            className="product-detail__images"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="product-detail__main-img">
              <img
                src={product.gallery[activeImg] || product.image}
                alt={product.name}
              />
              {product.badge && (
                <span className="product-detail__badge">{product.badge}</span>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="product-detail__thumbs">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`product-detail__thumb ${activeImg === i ? 'product-detail__thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="product-detail__info"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="product-detail__category">{product.category}</p>
            <h1 className="product-detail__name">{product.name}</h1>
            <p className="product-detail__price">₦{product.price.toLocaleString()}</p>

            <p className="product-detail__desc">{product.description}</p>

            {product.features && (
              <div className="product-detail__features">
                <p className="product-detail__features-label">Key Features</p>
                <ul>
                  {product.features.map(f => (
                    <li key={f}>
                      <Check size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity if already in cart */}
            {cartItem && (
              <div className="product-detail__qty">
                <span>In cart:</span>
                <div className="product-detail__qty-controls">
                  <button
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="product-detail__actions">
              <motion.button
                className={`product-detail__add-btn ${added ? 'product-detail__add-btn--added' : ''}`}
                onClick={handleAdd}
                whileTap={{ scale: 0.97 }}
              >
                {added ? (
                  <>
                    <Check size={18} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    {cartItem ? 'Add Another' : 'Add to Cart'}
                  </>
                )}
              </motion.button>

              {cartItem && (
                <Link to="/cart" className="btn-outline">
                  View Cart
                </Link>
              )}
            </div>

            <div className="product-detail__meta">
              <p>
                <strong>Category:</strong>{' '}
                <Link to={`/shop?cat=${product.category}`} style={{ textTransform: 'capitalize', color: 'var(--accent)' }}>
                  {product.category}
                </Link>
              </p>
              <p><strong>SKU:</strong> EI-{String(product.id).padStart(4, '0')}</p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="product-detail__related">
            <div className="section-header">
              <p className="section-label">You May Also Like</p>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Related Products</h2>
            </div>
            <div className="products-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
