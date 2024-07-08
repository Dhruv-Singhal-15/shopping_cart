import React from 'react';

const CartItem = ({ item, removeOneFromCart, removeAllFromCart }) => {
  return (
    <div className="cart-item" style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price} each</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeOneFromCart(item.title)}>Remove One</button>
      <div></div>
      <button onClick={() => removeAllFromCart(item.title)}>Remove All</button>
    </div>
  );
};

export default CartItem;
