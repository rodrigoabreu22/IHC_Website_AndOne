import React from 'react';

const ProductSizes = ({ sizes }) => {
  return (
    <div className="product-sizes">
      {sizes.map((size) => (
        <button
          key={size}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductSizes;