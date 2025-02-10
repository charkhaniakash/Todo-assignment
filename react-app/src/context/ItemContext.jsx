import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemContext = createContext();

const API_URL = "https://65f33fb7105614e654a03a69.mockapi.io/CRUD";

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Fetch items from API
  useEffect(() => {
    axios.get(API_URL).then((res) => setItems(res.data));
  }, []);

  // Add item
  const addItem = async () => {
    const newItem = { name: `Item ${items.length + 1}` };
    const res = await axios.post(API_URL, newItem);
    setItems([...items, res.data]);
  };

  // Delete item
  const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};
