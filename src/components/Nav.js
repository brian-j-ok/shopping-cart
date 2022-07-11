import React from "react";
import { Link } from 'react-router-dom';

import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <h3>Shop Name</h3>
      <ul className="nav-links">
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
    </div>
  )
}

export default Nav;