import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCartClick = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCartClick(item.id)}>Remove from Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
