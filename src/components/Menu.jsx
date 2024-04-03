import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';


export const foodItems = [
    { name: 'Margherita Pizza', price: 12.99, image: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-500x500.jpg' },
    { name: 'Spaghetti Bolognese', price: 11.99, image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg' },
    { name: 'Caesar Salad', price: 9.99, image: 'https://media.istockphoto.com/id/544814224/photo/fresh-caesar-salad.jpg?s=612x612&w=0&k=20&c=NMHaT37Is09u4lTsAhOhjASEIW8GoqcdXQqh0iMHWNI=' },
    { name: 'Garlic Bread', price: 5.99, image: 'https://www.budgetbytes.com/wp-content/uploads/2023/08/Garlic-Bread-close.jpg' },
    { name: 'Cheesecake', price: 6.99, image: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg' },
    { name: 'Espresso', price: 2.99, image: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg' },
    { name: 'Cheese Burger', price: 8.99, image: 'https://th.bing.com/th/id/R.9fec7468649c5f3b441ae52e377e7a9d?rik=MVks5QwOarfYIA&pid=ImgRaw&r=0' },
    { name: 'French fries', price: 4.99, image: 'https://www.simplyrecipes.com/thmb/J1VspbyJLSLXZsw7U04eIIGGXRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Fries-LEAD-06-303e022e2c174640916eabfb2bf45f0d.jpg' },
    { name: 'Glazed Donut', price: 7.99, image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/colorful-glazed-donuts.jpg' },
    { name: 'Churros', price: 11.99, image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/06/ch-1200x675.jpg' },
    // ... your food items ...
  ];

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        {foodItems.slice(0, foodItems.length / 2).map((item, index) => (
          <div className="menu-item" key={index}>
            <Link to={`/menu/${index}`} className="menu-item-link">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-price">${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="menu">
        {foodItems.slice(foodItems.length / 2).map((item, index) => (
          <div className="menu-item" key={index}>
            <Link to={`/menu/${index + foodItems.length / 2}`} className="menu-item-link">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-price">${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
