import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ProductsContext } from '../../context/ProductsContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './DetailItem.css';

export const DetailItem = () => {
	const [producto, setProduct] = useState(null);

	const { products } = useContext(ProductsContext);

	const [itemCount, setItemCount] = useState(0);

	const history = useHistory();

	useEffect(() => {
		getItems();
	}, []);

	const getItems = () => {
		const id = window.location.href.split('=')[1];

		const product = products.filter((producto) => producto.id === id);

		setProduct(product[0]);
	};
	return (
		<div className="card-detail">
			{producto && (
				<>
					<ItemCount itemCount={itemCount} onAdd={setItemCount} />
					<h1 className="card-titulo">{producto.nombre}</h1>
					<img className="card-imagen" src={producto.imagen} />
					<h2>{producto.description}</h2>
					<h3>{producto.serie}</h3>
					<h4>{producto.tecnica}</h4>
					<h4>{producto.materiales}</h4>
					<h5>Precio: ${producto.price}</h5>

					<button onClick={() => history.push('/cart')} style={{ padding: 10 }}>
						Finalizar Compra
					</button>
				</>
			)}
		</div>
	);
};
