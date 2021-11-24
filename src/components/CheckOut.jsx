import React, { useState } from 'react';
import { db } from '../firebase/index';

export const CheckOut = ({ order, total }) => {
  const [orderDetails, setOrderDetails] = useState({
    items: order,
    total,
    buyerName: '',
    buyerAddress: '',
  });

  const onChange = ({ target: { value, name } }) => {
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await db.collection('Orders').add(orderDetails);
    console.log(response);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Nombre y apellido'
          name='buyerName'
          onChange={onChange}
        />
        <input
          placeholder='Dirección'
          name='buyerAddress'
          onChange={onChange}
        />
        <button type='submit'>Comprar</button>
      </form>
    </div>
  );
};
