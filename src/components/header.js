import React from 'react';

const Header = ({ toggleCart }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px',fontVariant: "small-caps"}}>
      <h1>E-commerce Catalog</h1>
      <button className='cart-button' onClick={toggleCart} >
        🛒 View Cart
      </button>
    </header>
  );
};

export default Header;
