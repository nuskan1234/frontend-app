import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { foodItems } from './Menu'; // Import the foodItems array
import './admin.css';


const AdminHome = () => {
    const navigate = useNavigate();
  // Function to handle the registration of a new food item
  const handleRegisterNewFood = () => {
    navigate('/RegisterFood');
    // Logic to open the form for registering a new food item
  };

  // Function to handle the update of an existing food item
  const handleUpdateFood = (itemId) => {
    // Logic to open the form for updating the food item with the given itemId
  };

  // Function to handle the deletion of an existing food item
  const handleDeleteFood = (itemId) => {
    // Logic to delete the food item with the given itemId
  };

  return (
    <div className="admin-home-container">
      <h1>Admin Dashboard</h1>
      <button onClick={handleRegisterNewFood}>Register New Food</button>
      <div className="food-list">
        {foodItems.map((item, index) => (
          <div className="food-item" key={index}>
            <img src={item.image} alt={item.name} className="food-item-image" />
            <h3 className="food-item-name">{item.name}</h3>
            <p className="food-item-price">${item.price}</p>
            <button onClick={() => handleUpdateFood(index)}>Update</button>
            <button onClick={() => handleDeleteFood(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
