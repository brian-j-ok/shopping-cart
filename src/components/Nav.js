import React from "react";
import { Link } from 'react-router-dom';

import "../styles/App.css";

const Nav = () => {
  return (
    <header>
      <span id="logo">Fake Store</span>

      <ul class="link-container">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/shop">
          <li>Shop</li>
        </Link>

        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </header>
  )
}

export default Nav;