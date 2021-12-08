import { Button } from '@chakra-ui/button';
import React from 'react';

export const Cart = ({ cartProduct, handleDelete }) => {
  console.log(cartProduct);
  return (
    <div>
      <h1>{cartProduct.name}</h1>
      <h2>{cartProduct.quantity}</h2>
      <Button
        colorScheme='red'
        onClick={() => handleDelete(cartProduct.productId)}
      >
        Delete from Cart
      </Button>
    </div>
  );
};
