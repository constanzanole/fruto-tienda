import React from 'react';
import './CartItem.css';
import { IoCartOutline } from 'react-icons/io5';

const CartItem = () => {
	return (
		<div className="cart-container">
			<IoCartOutline color={'white'} size={32} />
		</div>
	);
};

export default CartItem;
