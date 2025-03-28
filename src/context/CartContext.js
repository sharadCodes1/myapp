import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (destination) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.location === destination.location);
      if (exists) {
        return prev.map(item =>
          item.location === destination.location
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...destination, quantity: 1 }];
    });
  };

  const removeFromCart = (location) => {
    setCartItems(prev => prev.filter(item => item.location !== location));
  };

  const updateQuantity = (location, quantity) => {
    if (quantity < 1) {
      removeFromCart(location);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.location === location ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.basePrice * item.quantity), 0);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      isCartOpen,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
}; 