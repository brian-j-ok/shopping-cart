import React, { useState, useEffect } from 'react';

const Cart = ({cart, setCart}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    cart.forEach(product => {
      cartTotal += (product.price * product.quantity);
    })
    setTotal(cartTotal);
  }, [cart]);

  const removeItem = (id) => {
    setCart(cart =>
      cart.filter(product => {
        return product.id !== id;
      })
    )
  }

  return (
    <div>
      <ul>
        {cart.map(product => (
          <li class="cart-card">
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <h4>$ {product.price}</h4>
              <h4>Quantity: {product.quantity}</h4>
            </div>
            <div>
              <button onClick={() => removeItem(product.id)}>Remove</button>
            </div>
          </li>
        ))}
        <h1>Cart Total: {total}</h1>
      </ul>
    </div>
  )
}

export default Cart;