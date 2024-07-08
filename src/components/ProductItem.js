// import React from 'react';

// const ProductItem = ({ product, addToCart }) => {
//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductItem;

import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Company: {product.company}</p>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
