import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { ItemContext } from "../context/ItemContext";
import Card from "./Card";
import "../App.css";

const CardList = () => {
  const { items, addItem } = useContext(ItemContext);

  return (
    <div className="container">
      <h2>Items List</h2>
      <button className="add-btn" onClick={addItem}>➕ Add Item</button>
      <div className="card-container">
        <AnimatePresence>
          {items.map((item) => <Card key={item.id} item={item} />)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardList;
