import React from 'react';
import './CartItem.css';
import { IoCartOutline } from 'react-icons/io5';

const CartItem = ({ navigateToCart, cantItems }) => {
  return (
    <div className='cart-container' onClick={navigateToCart}>
      <IoCartOutline color={'white'} size={32} />
      <div>
        <span style={{ color: 'white' }}>{cantItems}</span>
      </div>
    </div>
  );
};

export default CartItem;
