import { Button } from '@chakra-ui/button';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useHistory } from 'react-router';
import '../../App.css';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

function NavBar({ setCategory }) {
  const [showLinks, setShowLinks] = useState(false);

  const { cart } = useContext(CartContext);

  const history = useHistory();

  const navigateToCart = () => {
    history.push('/cart');
  };

  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
          <a onClick={() => setCategory()} style={{ cursor: 'pointer' }}>
            Inicio
          </a>
          <a
            onClick={() => setCategory('collar')}
            style={{ cursor: 'pointer' }}
          >
            Collares
          </a>
          <a onClick={() => setCategory('aros')} style={{ cursor: 'pointer' }}>
            Aros
          </a>
          <a
            onClick={() => setCategory('broches')}
            style={{ cursor: 'pointer' }}
          >
            Broches
          </a>
          <a
            onClick={() => setCategory('anillo')}
            style={{ cursor: 'pointer' }}
          >
            Anillos
          </a>
          <a
            onClick={() => setCategory('pulseras')}
            style={{ cursor: 'pointer' }}
          >
            Pulseras
          </a>
        </div>
        {window.screen.width <= 650 && (
          <AiOutlineMenu
            onClick={() => setShowLinks(!showLinks)}
            color={'white'}
            size={30}
            className='menu-icon'
          >
            FRUTO
          </AiOutlineMenu>
        )}
      </div>
      <div className='rightSide'>
        <input type='text' placeholder='Buscar....' />
        <Button ml='3'>Buscar</Button>
        <CartItem
          navigateToCart={navigateToCart}
          cantItems={cart.reduce(
            (prevVal, currentVal) => prevVal + currentVal.quantity,
            0
          )}
        />
      </div>
    </div>
  );
}

export default NavBar;
