import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName , setSearchName] = useState("");
  const [newItemsArray, setNewItemsArray] = useState(items);

  function addElement(element) {
    setNewItemsArray([...newItemsArray, element]); 
  }


  function handleCategoryChange(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }

  function searchChange(event){
    console.log(event.target.value);
    setSearchName(event.target.value);
  }
  const itemsToDisplay = newItemsArray.filter((item) => {
    if (selectedCategory === "All" && searchName === ""){
      return true;
    } else if(item.category === selectedCategory){
      return true;
    }else{
      return item.name.includes(searchName);
    }
      

  });

  return (
    <div className="ShoppingList">
      
      <ItemForm  onItemFormSubmit={addElement}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={searchChange} search={searchName}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
