import { Button } from '@chakra-ui/button';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../components/Cart/Cart';
import { CheckOut } from '../components/CheckOut';
import { CartContext } from '../context/CartContext';

export const CartScreen = () => {
  const { cart, onRemoveItem, clearCart } = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);

  return cart.length > 0 ? (
    <div>
      {cart.map((cartItem) => (
        <Cart
          cartProduct={cartItem}
          handleDelete={onRemoveItem}
          key={cartItem.productId}
        />
      ))}
      <h1>
        Total:{' '}
        {cart.reduce(
          (prevVal, currentValue) =>
            prevVal + currentValue.precio * currentValue.quantity,
          0
        )}
      </h1>
      <Button onClick={() => setShowForm(!showForm)}>Terminar Compra</Button>
      {showForm && (
        <CheckOut
          order={cart}
          total={cart.reduce(
            (prevVal, currentValue) =>
              prevVal + currentValue.precio * currentValue.quantity,
            0
          )}
          clearCart={clearCart}
        />
      )}
    </div>
  ) : (
    <>
      <h1>No hay productos en su carrito</h1>
      <Link to={'/'}>Volver a Inicio</Link>
    </>
  );
};
