import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, removeItem, updateQuantity, totalItems, totalPrice, checkoutViaWhatsApp } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="container">
          <motion.div
            className="cart-empty"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cart-empty__icon">
              <ShoppingBag size={48} />
            </div>
            <h2 className="cart-empty__title">Your cart is empty</h2>
            <p className="cart-empty__desc">
              Looks like you haven't added anything yet. Browse our collection and find something you love.
            </p>
            <Link to="/shop" className="btn-primary">
              Browse Collection <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="cart-page__header"
        >
          <h1 className="cart-page__title">Your Cart</h1>
          <p className="cart-page__count">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
        </motion.div>

        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            <AnimatePresence initial={false}>
              {cart.map(item => (
                <motion.article
                  key={item.id}
                  className="cart-item"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/product/${item.id}`} className="cart-item__img">
                    <img src={item.image} alt={item.name} />
                  </Link>

                  <div className="cart-item__body">
                    <div className="cart-item__info">
                      <p className="cart-item__category">{item.category}</p>
                      <h3 className="cart-item__name">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="cart-item__unit-price">₦{item.price.toLocaleString()} each</p>
                    </div>

                    <div className="cart-item__controls">
                      <div className="cart-item__qty">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="cart-item__subtotal">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>

                      <motion.button
                        className="cart-item__remove"
                        onClick={() => removeItem(item.id)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <motion.div
            className="cart-summary"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="cart-summary__title">Order Summary</h2>

            <div className="cart-summary__lines">
              {cart.map(item => (
                <div key={item.id} className="cart-summary__line">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__total">
              <span>Total</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>

            <p className="cart-summary__note">
              Final pricing, delivery fees, and lead times will be confirmed via WhatsApp.
            </p>

            <motion.button
              className="cart-summary__checkout-btn"
              onClick={checkoutViaWhatsApp}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Checkout via WhatsApp
            </motion.button>

            <Link to="/shop" className="cart-summary__continue">
              ← Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
