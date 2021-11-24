import React from 'react';

export const Cart = ({ cartProduct, handleDelete }) => {
  console.log(cartProduct);
  return (
    <div>
      <h1>{cartProduct.name}</h1>
      <h2>{cartProduct.quantity}</h2>
      <button onClick={() => handleDelete(cartProduct.id)}>
        Delete from Cart
      </button>
    </div>
  );
};
