import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import './item.css';

const MenuItemDetails = ({ foodItems }) => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Find the item based on itemId
    const foundItem = foodItems.find((item, index) => index.toString() === itemId);
    setItem(foundItem);
  }, [foodItems, itemId]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCartClick = () => {
    if (item) {
      addToCart({ ...item, quantity }); // Ensure item includes quantity when adding to cart
      alert('Item added to cart!');
      navigate('/cart');
    }
  };
  

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="menu-item-details">
      <img src={item.image} alt={item.name} className="menu-item-image1" />
      <div className="menu-item-text">
        <h3 className="menu-item-name1">{item.name}</h3>
        <p className="menu-item-price1">${item.price.toFixed(2)}</p>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default MenuItemDetails;
