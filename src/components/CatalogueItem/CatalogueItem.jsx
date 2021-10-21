import React, { useState } from 'react';
import cart from '../../data/cart';

const CatalogueItem = ({ producto }) => {
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
		<div>
			<h1>{producto.nombre}</h1>
			<img src={producto.imagen} alt={producto.nombre} />
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
