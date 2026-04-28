import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const loadCart = () => {
  try {
    const saved = localStorage.getItem('ei_cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem('ei_cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    const phone = '2349061293409';
    const itemLines = cart
      .map(
        item =>
          `• ${item.name} (Qty: ${item.quantity}) — ₦${(item.price * item.quantity).toLocaleString()}`
      )
      .join('\n');
    const message =
      `Hello Everything Interiors! 👋\n\nI'd like to place an order for the following:\n\n` +
      itemLines +
      `\n\n*Order Total: ₦${totalPrice.toLocaleString()}*\n\nKindly confirm availability and delivery details. Thank you!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, checkoutViaWhatsApp }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
