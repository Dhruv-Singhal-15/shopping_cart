import React from 'react';
import ProductItem from './ProductItem';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div>
//       {products.map(product => (
//         <ProductItem key={product.id} product={product} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;



const ProductList = ({ products, addToCart }) => {
  if(products){
    return (
      <div className="product-list">
        {products.map(product => (
          <ProductItem
            key={product.title}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    );

  }else{
    return(
      <>
      <div>Error fetching products list :( </div>
      </>
    )
  } 
  
};

export default ProductList;
