import React, { useState } from "react";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      description: description,
    };

    setName("");
    setDescription("");

    // Add item to state
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add item</button>
    </form>
  );
};

export default ItemForm;