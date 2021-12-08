import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { db } from '../firebase/index';

export const CheckOut = ({ order, total, clearCart }) => {
  const history = useHistory();
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
    const { isConfirmed } = await Swal.fire({
      title: 'Compra Realizada',
      text: `Tu número de orden es ${(await response.get()).id}`,
      icon: 'success',
      showConfirmButton: true,
    });
    clearCart();
    if (isConfirmed) history.push('/');
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={onSubmit}>
        <Input
          placeholder='Nombre y apellido'
          name='buyerName'
          onChange={onChange}
        />
        <Input
          placeholder='Dirección'
          name='buyerAddress'
          onChange={onChange}
        />
        <Button colorScheme='teal' size='md' type='submit'>
          Comprar
        </Button>
      </form>
    </div>
  );
};
