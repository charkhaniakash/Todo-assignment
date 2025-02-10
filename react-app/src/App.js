import './App.css';
import React from "react";
import { ItemProvider } from "./context/ItemContext";
import CardList from "./components/CardList";

const App = () => {
  return (
    <ItemProvider>
      <CardList />
    </ItemProvider>
  );
};

export default App;
