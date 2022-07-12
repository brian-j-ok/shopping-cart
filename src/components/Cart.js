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

  const editQuantity = (id, e) => {
    console.log(e.target.value);
    const tempCart = cart;
    tempCart.forEach(product => {
      if(product.id === id) {
        product.quantity = e.target.value;
      }
    });
    setCart([...tempCart]);
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
              <div class="cart-change">
                <h4>Quantity: <input type="number" step="1" min="1" max="10" value={product.quantity} onChange={(e) => editQuantity(product.id, e)}/></h4>
                <button onClick={() => removeItem(product.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
        <h1>Cart Total: ${total.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}</h1>
      </ul>
    </div>
  )
}

export default Cart;