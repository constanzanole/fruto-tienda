import React, { useState } from 'react';
import cart from '../../data/cart';
import './CatalogueItem.css';

const CatalogueItem = ({ producto, history }) => {
	const [quantity, setQuantity] = useState(producto.quantity);

	const decrement = () => {
		setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
	};

	const increment = () => {
		producto.stock > quantity && setQuantity(quantity + 1);
	};

	const addToCart = (product) => {
		cart.push(product);
	};

	return (
		<div className="card">
			<h2
				className="card-titulo"
				onClick={() => {
					history.push(`/producto/productId=${producto.id}`);
				}}
			>
				{producto.nombre}
			</h2>
			<img
				src={producto.imagen}
				alt={producto.nombre}
				className="Card-Imagen"
			/>
			<button onClick={decrement}>-</button>
			<span>{quantity}</span>
			<button onClick={increment}>+</button>
			<button onClick={() => addToCart({ ...producto, quantity })}>
				Agregar al Carrito
			</button>
		</div>
	);
};

export default CatalogueItem;
