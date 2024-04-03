import { createContext, useState } from 'react';

export const FoodItemsContext = createContext();

export const FoodItemsProvider = (props) => {
  const { children } = props;

  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (newFoodItem) => {
    setFoodItems((prevFoodItems) => [...prevFoodItems, newFoodItem]);
  };

  return (
    <FoodItemsContext.Provider value={{ foodItems, addFoodItem }}>
      {children}
    </FoodItemsContext.Provider>
  );
};