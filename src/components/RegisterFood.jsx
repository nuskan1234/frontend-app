import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItemsContext } from "./FoodItemsContext";
import axios from "axios";

const RegisterFood = () => {
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodPrice, setNewFoodPrice] = useState("");
  const [newFoodImage, setNewFoodImage] = useState(null);
  const { addFoodItem, foodItems } = useContext(FoodItemsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (foodItems.length > 0) {
      navigate("/AdminHome");
    }
  }, [foodItems, navigate]);

  const handleNewFoodSubmit = async (event) => {
    event.preventDefault();

    if (!newFoodName || !newFoodPrice || !newFoodImage) {
      console.error("Missing required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", newFoodName);
    formData.append("price", newFoodPrice);
    formData.append("image", newFoodImage);

    try {
      const response = await axios.post("/api/food", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      addFoodItem({
        id: response.data.id,
        name: newFoodName,
        price: newFoodPrice,
        image: URL.createObjectURL(newFoodImage),
      });

      console.log("Food item added successfully");

      // Clear the form fields
      setNewFoodName("");
      setNewFoodPrice("");
      setNewFoodImage(null);

      // Navigate to the AdminHome component
      navigate("/AdminHome");

      // Optionally show a success message
    } catch (error) {
      console.error("Error registering food item", error);

      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <form onSubmit={handleNewFoodSubmit}>
        <input
          type="text"
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="Food Name"
        />
        <input
          type="text"
          value={newFoodPrice}
          onChange={(e) => setNewFoodPrice(e.target.value)}
          placeholder="Food Price"
        />
        <input
          type="file"
          onChange={(e) => setNewFoodImage(e.target.files[0])}
        />
        <button type="submit">Add New Food</button>
      </form>
    </div>
  );
};

export default RegisterFood;