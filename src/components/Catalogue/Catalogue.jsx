import React, { useEffect, useState } from 'react';
import productos from '../../data/productos';
import CatalogueItem from '../CatalogueItem/CatalogueItem';

const Catalogue = ({ greeting }) => {
	const [products, setProducts] = useState([]);

	const fetchProducts = (data) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se han encontrado productos');
				}
			}, 3000);
		});
	};

	useEffect(() => {
		fetchProducts(productos)
			.then((res) => setProducts(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>{greeting}</h1>
			<div>
				{products.length ? (
					products.map((producto) => <CatalogueItem producto={producto} />)
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
};

export default Catalogue;
