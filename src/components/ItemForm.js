import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItemCategory, setNewItemCategory] = useState("Produce");
  const [newItemName, setNewItemName] = useState("");

  function handleNewItemCategory(event){
    console.log(event.target.value);
    setNewItemCategory(event.target.value)
  }

  function handleNewItemName(event){
    console.log(event.target.value);
    setNewItemName(event.target.value)
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newItemName,
    category: newItemCategory,
  };

  
  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit(newItem);
  }
  
      
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
