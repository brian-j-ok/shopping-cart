import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart"

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;