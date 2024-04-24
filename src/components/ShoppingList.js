import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setCategory] = useState('All')
  
  function handleChange(event) {
    setCategory(event.target.value)
  }
  const newFoodArr = items.filter((foods) => {
    if(selectedCategory === 'All') {
      return true
    } else {
      return foods.category === selectedCategory
    }
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newFoodArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
