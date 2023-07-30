import React from "react";
import Item from "./item";

const Index = ({ items }) => {
  return (
    <div>
      <h2>Your items:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
