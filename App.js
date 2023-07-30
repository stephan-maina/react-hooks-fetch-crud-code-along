import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Filter from "./filter";
import Item from "./item";
import ItemForm from "./itemform";
import Index from "./index";
import ShoppingList from "./shoppinglist";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/octocat`;
      const response = await fetch(url, {
        method: "GET",
      });

      const data = await response.json();

      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Filter />
      <ItemForm />
      <Index items={items} />
      <ShoppingList items={items} />
    </div>
  );
};

export default App;