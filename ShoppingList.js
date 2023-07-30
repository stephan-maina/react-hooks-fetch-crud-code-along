import React from "react";

const ShoppingList = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default ShoppingList;