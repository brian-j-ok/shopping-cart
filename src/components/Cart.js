import React from 'react';

const Cart = ({cart, setCart}) => {
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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;