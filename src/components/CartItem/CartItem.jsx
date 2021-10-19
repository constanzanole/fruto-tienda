import React from 'react';
import './CartItem.css';
import { IoCartOutline } from 'react-icons/io5';
import productos from '../../data/productos';

const CartItem = () => {
	return (
		<div className="cart-container">
			<IoCartOutline color={'white'} size={32} />
			<div>
				<span>{productos.length}</span>
			</div>
		</div>
	);
};

export default CartItem;
