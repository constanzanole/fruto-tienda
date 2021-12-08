import { Button } from '@chakra-ui/button';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from '../../data/cart';
import './CatalogueItem.css';

const CatalogueItem = ({ producto, history }) => {
  const { onAdd, isInCart, onRemoveItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(producto.quantity);

  const decrement = () => {
    setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
  };

  const increment = () => {
    producto.stock > quantity && setQuantity(quantity + 1);
  };

  return (
    <div className='card'>
      <h2
        className='card-titulo'
        onClick={() => {
          history.push(`/producto/productId=${producto.productId}`);
        }}
      >
        {producto.name}
      </h2>
      <img src={producto.imagen} className='Card-Imagen' />
      <Button variant='ghost' onClick={decrement} mt='2' mr='2'>
        -
      </Button>
      <span style={{ marginTop: 10 }}>{quantity}</span>
      <Button variant='ghost' onClick={increment} mr='2' mt='2' ml='2'>
        +
      </Button>
      <Button
        mt='2'
        colorScheme={isInCart(producto.productId) ? 'red' : 'blue'}
        onClick={() =>
          isInCart(producto.productId)
            ? onRemoveItem(producto.productId)
            : onAdd(producto, quantity)
        }
      >
        {isInCart(producto.productId)
          ? 'Eliminar del carrito'
          : 'Agregar al Carrito'}
      </Button>
    </div>
  );
};

export default CatalogueItem;
