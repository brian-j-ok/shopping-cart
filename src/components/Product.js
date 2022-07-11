import React, { useState } from "react";

const Product = (props) => {
  const options = [
    {value: '1', text: '1'},
    {value: '2', text: '2'},
    {value: '3', text: '3'},
  ]

  const [quantity, setQuantity] = useState(options[0].value);

  function handleChange(e) {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }

  const addToCart = () => {
    console.log(quantity);
  }

  return (
    <div className="product">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <h4>Price: {props.price}</h4>
      <p>{props.description}</p>
      <div>
        <select value={quantity} onChange={handleChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button type="submit" onClick={addToCart}>Add</button>
      </div>
    </div>
  )
}

export default Product;