import React, { useState, useEffect } from "react";

import "../styles/App.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    console.log(products);
    setProducts(products);
  }

  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>Price: {product.price}</h4>
          <p>{product.description}</p>
          <div>
            <input type="number" min="0" max="10" defaultValue="0" />
            <button type="submit">Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shop;