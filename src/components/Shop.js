import React, { useState, useEffect } from "react";

import Product from "./Product";

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
        <Product 
          id={product.id}
          category={product.category}
          description={product.description}
          image={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  )
}

export default Shop;