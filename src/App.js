// App.js
import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import SignUp from './components/signup';
import MenuItemDetails from './components/MenuItemDetails';
import Contact from './components/Contact';
import Cart from './components/Cart';
import AdminHome from './components/AdminHome';
import { foodItems } from './components/Menu';
import RegisterFood from './components/RegisterFood';
import { FoodItemsProvider } from './components/FoodItemsContext';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // If the item exists, update its quantity
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + quantity
        };
        return updatedCartItems;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCartItems, { ...item, quantity }];
      }
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <FoodItemsProvider>
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:itemId" element={<MenuItemDetails foodItems={foodItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/RegisterFood" element={<RegisterFood />} />
          

          
          
          {/* ... other routes ... */}
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </FoodItemsProvider>
  );
}

export default App;
