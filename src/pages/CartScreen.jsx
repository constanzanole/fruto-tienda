import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../components/Cart/Cart';
import { CartContext } from '../context/CartContext';

export const CartScreen = () => {
	const { cart, onRemoveItem } = useContext(CartContext);

	return cart.length > 0 ? (
		<div>
			{cart.map((cartItem) => (
				<Cart cartProduct={cartItem} handleDelete={onRemoveItem} />
			))}
			<h1>
				Total:{' '}
				{cart.reduce(
					(prevVal, currentValue) =>
						prevVal + currentValue.price * currentValue.quantity,
					0
				)}
			</h1>
			<button>Terminar Compra</button>
		</div>
	) : (
		<>
			<h1>No hay productos en su carrito</h1>
			<Link to={'/'}>Volver a Inicio</Link>
		</>
	);
};
