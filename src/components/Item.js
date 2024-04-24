import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  
  function handleCart(){
    setCart((cart) => !cart)
  }

  const cartClass = cart ? "in-cart" : ""
  const cartText = cart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
