import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import '../../App.css';
import CartItem from '../CartItem/CartItem';

function NavBar({ setCategory }) {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<div className="Navbar">
			<div className="leftSide">
				<div className="links" id={showLinks ? 'hidden' : ''}>
					<a onClick={() => setCategory(null)} style={{ cursor: 'pointer' }}>
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
						className="menu-icon"
					>
						FRUTO
					</AiOutlineMenu>
				)}
			</div>
			<div className="rightSide">
				<input type="text" placeholder="Buscar...." />
				<button>Buscar</button>
				<CartItem />
			</div>
		</div>
	);
}

export default NavBar;
