import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import productos from '../../data/productos';
import { ItemCount } from '../ItemCount/ItemCount';
import './DetailItem.css';

export const DetailItem = () => {
  const [product, setProduct] = useState(null);

  const [itemCount, setItemCount] = useState(0);

  const history = useHistory();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    const id = window.location.href.split('=')[1];

    const product = productos.filter((producto) => producto.id === id);

    setProduct(product[0]);
  };
  return (
    <div className='card-detail'>
      {product && (
        <>
          <ItemCount itemCount={itemCount} onAdd={setItemCount} />
          <h1 className='card-titulo'>{product.nombre}</h1>
          <img className='card-imagen' src={product.imagen} />
          <h2>{product.description}</h2>
          <h3>{product.serie}</h3>
          <h4>{product.tecnica}</h4>
          <h4>{product.materiales}</h4>
          <h5>{product.price}</h5>

          <button onClick={() => history.push('/cart')} style={{ padding: 10 }}>
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};
