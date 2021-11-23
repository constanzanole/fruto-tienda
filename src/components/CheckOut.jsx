import { useState } from 'react';
import { db } from '../firebase/index';
import { productos } from '../data/productos';
import BuyerForm from './Form';

const CheckOut = () => {
	const [buyer, setBuyer] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const date = new Date();
	const orderDate = date.toLocaleDateString();

	const orders = db.collection('Items');

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();

			const newOrder = {
				buyer,
				product,
				price: productos.price * productos.quantity,
				date: orderDate,
			};
			const results = await orders.add(newOrder);
			setBuyer({
				name: '',
				email: '',
				phone: '',
			});
			console.log(results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} action="">
				<label htmlFor="">Inserta aquí tu nombre y apellido</label>
				<BuyerForm setBuyer={setBuyer} name="name" buyer={buyer} />
				<label htmlFor="">Inserta aquí tu email</label>
				<BuyerForm setBuyer={setBuyer} name="email" buyer={buyer} />
				<label htmlFor="">Inserta aquí tu numero de teléfono</label>
				<BuyerForm setBuyer={setBuyer} name="phone" buyer={buyer} />
				<button type="submit">Finalizar Compra</button>
			</form>
		</div>
	);
};

export default CheckOut;
