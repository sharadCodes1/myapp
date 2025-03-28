import React from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../componentsstyle/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, toggleCart, clearCart } = useCart();

  // Separate destinations and packages
  const destinations = cartItems.filter(item => !item.type.includes('Package'));
  const packages = cartItems.filter(item => item.type.includes('Package'));

  // Calculate totals
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const destinationsTotal = calculateTotal(destinations);
  const packagesTotal = calculateTotal(packages);
  const grandTotal = destinationsTotal + packagesTotal;

  const CartItem = ({ item, isPackage }) => (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-header">
          <h3>{item.name}</h3>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            <FaTrash />
          </button>
        </div>
        {isPackage ? (
          <>
            <p className="package-duration">{item.duration}</p>
            <p className="package-destinations">Destinations: {item.destinations.join(', ')}</p>
          </>
        ) : (
          <>
            <p className="destination-type">{item.type} • {item.idealDays} days</p>
            <p className="destination-description">{item.description}</p>
          </>
        )}
        <div className="cart-item-footer">
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} disabled={(item.quantity || 1) <= 1}>
              <FaMinus />
            </button>
            <span>{item.quantity || 1}</span>
            <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
              <FaPlus />
            </button>
          </div>
          <p className="item-price">₹{(item.price * (item.quantity || 1)).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`}>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Travel Cart</h2>
          <button className="close-cart" onClick={toggleCart}>×</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p className="empty-cart-subtitle">Add some amazing destinations to your journey!</p>
            </div>
          ) : (
            <>
              {destinations.length > 0 && (
                <div className="cart-section">
                  <h3 className="section-title">Destinations</h3>
                  {destinations.map(item => (
                    <CartItem key={item.id} item={item} isPackage={false} />
                  ))}
                  <div className="section-total">
                    <span>Destinations Total:</span>
                    <span>₹{destinationsTotal.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {packages.length > 0 && (
                <div className="cart-section">
                  <h3 className="section-title">Travel Packages</h3>
                  {packages.map(item => (
                    <CartItem key={item.id} item={item} isPackage={true} />
                  ))}
                  <div className="section-total">
                    <span>Packages Total:</span>
                    <span>₹{packagesTotal.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Grand Total:</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>
            <div className="cart-actions">
              <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 