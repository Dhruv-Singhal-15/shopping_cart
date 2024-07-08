import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, removeOneFromCart, removeAllFromCart, totalCost }) => {
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.title} item={item} removeOneFromCart={removeOneFromCart} removeAllFromCart={removeAllFromCart} />
      ))}
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
