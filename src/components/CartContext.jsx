import React, { createContext, useState } from 'react';

// Create the context with a default value
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Define a function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Define a function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  // Define a function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // The value provided to the context consumers
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
