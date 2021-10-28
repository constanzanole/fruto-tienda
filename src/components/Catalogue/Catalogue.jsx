import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import productos from '../../data/productos';
import CatalogueItem from '../CatalogueItem/CatalogueItem';
import './Catalogue.css';

const Catalogue = ({ greeting }) => {
	const [products, setProducts] = useState([]);

	const history = useHistory();

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
			<div className="card-catalogue">
				{products.length ? (
					products.map((producto) => (
						<CatalogueItem
							producto={producto}
							key={producto.id}
							history={history}
						/>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
};

export default Catalogue;
