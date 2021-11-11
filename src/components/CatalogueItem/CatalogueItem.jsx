import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from '../../data/cart';
import './CatalogueItem.css';

const CatalogueItem = ({ producto, history }) => {
  const { state, onAdd, isInCart, onRemoveItem } = useContext(CartContext);
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
          history.push(`/producto/productId=${producto.id}`);
        }}
      >
        {producto.nombre}
      </h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className='Card-Imagen'
      />
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button
        onClick={() =>
          isInCart(producto.id)
            ? onRemoveItem(producto.id)
            : onAdd(producto, quantity)
        }
      >
        {isInCart(producto.id) ? 'Eliminar del carrito' : 'Agregar al Carrito'}
      </button>
    </div>
  );
};

export default CatalogueItem;
