import React from 'react';

const ProductSizes = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <div>
      {sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => setCurrentSize(currentSize === size ? null : size)}
          className={currentSize === size ? 'selected' : ''}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductSizes;