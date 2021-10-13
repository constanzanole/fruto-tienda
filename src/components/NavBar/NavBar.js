import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import '../../App.css';
import CartItem from '../CartItem/CartItem';

function NavBar() {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<div className="Navbar">
			<div className="leftSide">
				<div className="links" id={showLinks ? 'hidden' : ''}>
					<a href="/collares">Collares</a>
					<a href="/aros">Aros</a>
					<a href="/broches">Broches</a>
					<a href="/anllos">Anillos</a>
					<a href="/pulseras">Pulseras</a>
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
