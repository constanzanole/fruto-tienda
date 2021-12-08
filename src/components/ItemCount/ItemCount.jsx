import { Button } from '@chakra-ui/button';
import React from 'react';

export const ItemCount = ({ itemCount, onAdd }) => {
  const increaseQuantity = () => {
    onAdd(itemCount + 1);
  };

  const decreaseQuantity = () => {
    onAdd(itemCount <= 0 ? 0 : itemCount - 1);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}
    >
      <Button onClick={decreaseQuantity}>-</Button>
      <span style={{ marginLeft: 10, marginRight: 10 }}>{itemCount}</span>
      <Button onClick={increaseQuantity}>+</Button>
    </div>
  );
};
