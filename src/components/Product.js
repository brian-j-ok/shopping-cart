import React, { useState } from "react";

const Product = (props) => {
  const options = [
    {value: 1, text: '1'},
    {value: 2, text: '2'},
    {value: 3, text: '3'},
  ]

  const [quantity, setQuantity] = useState(options[0].value);

  function handleChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  const checkCart = () => {
    if (props.cart.length === 0) { return false }

    return props.cart.some(product => product.id === props.id)
  }

  const addToCart = () => {
    const tempCart = props.cart;

    if (checkCart()) {
      tempCart.forEach(product => {
        if (product.id === props.id) { product.quantity += quantity }
      })
      props.setCart([...tempCart]);
    } else {
      props.setCart([...props.cart, {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        quantity: quantity
      }]);
    }

    console.log(props.cart);
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