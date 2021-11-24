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
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button
        onClick={() =>
          isInCart(producto.productId)
            ? onRemoveItem(producto.productId)
            : onAdd(producto, quantity)
        }
      >
        {isInCart(producto.productId)
          ? 'Eliminar del carrito'
          : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default CatalogueItem;
