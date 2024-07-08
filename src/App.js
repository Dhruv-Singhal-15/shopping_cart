

// import React, { useState } from 'react';
// import Header from './components/header';
// import ProductList from './components/ProductList';
// import ShoppingCart from './components/ShoppingCart';
// import './App.css';


// const App = () => {
//   const [products] = useState([
//     { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
//     { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
//     // Add more products as needed
//   ]);

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (productToAdd) => {
//     const existingItem = cart.find(item => item.id === productToAdd.id);

//     if (existingItem) {
//       const updatedCart = cart.map(item => {
//         if (item.id === productToAdd.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...productToAdd, quantity: 1 }]);
//     }
//   };

//   const removeOneFromCart = (itemId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === itemId && item.quantity > 0) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     }).filter(item => item.quantity > 0);

//     setCart(updatedCart);
//   };

//   const removeAllFromCart = (itemId) => {
//     const updatedCart = cart.filter(item => item.id !== itemId);
//     setCart(updatedCart);
//   };

//   const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div>
//       <Header toggleCart={toggleCart} />
//       {showCart ? (
//         <ShoppingCart cartItems={cart} removeOneFromCart={removeOneFromCart} removeAllFromCart={removeAllFromCart} totalCost={totalCost} />
//       ) : (
//         <ProductList products={products} addToCart={addToCart} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import Header from './components/header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import data from './data.js'; // Assuming data.js exists and exports an array of products
import './App.css';

const App = () => {

  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  //console.log(products);

  const addToCart = (productToAdd) => {
    const existingItem = cart.find(item => item.title === productToAdd.title);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.title === productToAdd.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeOneFromCart = (title) => {
    const updatedCart = cart.map(item => {
      if (item.title === title && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const removeAllFromCart = (title) => {
    const updatedCart = cart.filter(item => item.title !== title);
    setCart(updatedCart);
  };

  const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const toggleCart = () => {
    setShowCart(!showCart);
  };


  return (
    <div>
      <Header toggleCart={toggleCart} />
      {showCart ? 
      (
        <ShoppingCart
          cartItems={cart}
          removeOneFromCart={removeOneFromCart}
          removeAllFromCart={removeAllFromCart}
          totalCost={totalCost}
        />
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
