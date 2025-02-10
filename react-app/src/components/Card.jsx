import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ItemContext } from "../context/ItemContext";
import "../App.css";
import { MdDelete } from "react-icons/md";

const Card = ({ item }) => {
  const { deleteItem } = useContext(ItemContext);

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <p>{item.name}</p>
      <MdDelete className="delete-icon" onClick={() => deleteItem(item.id)} />
      {/* <button className="delete-btn" onClick={() => deleteItem(item.id)}>❌</button> */}
    </motion.div>
  );

};

export default Card;
