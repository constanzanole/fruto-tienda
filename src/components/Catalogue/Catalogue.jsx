import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import productos from '../../data/productos';
import CatalogueItem from '../CatalogueItem/CatalogueItem';
import './Catalogue.css';

const Catalogue = ({ greeting, category }) => {
	const [products, setProducts] = useState([]);

	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const fetchProducts = (data) => {
		setLoading(true);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se han encontrado productos');
				}
				setLoading(false);
			}, 3000);
		});
	};

	useEffect(() => {
		setLoading(false);
		fetchProducts(productos)
			.then((res) => setProducts(res))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (category)
			setProducts(productos.filter((producto) => producto.tipo === category));
		else {
			setProducts(productos);
		}
		console.log({
			category,
			products,
		});
	}, [category]);

	return (
		<div>
			<h1>{greeting}</h1>
			<div className="card-catalogue">
				{products.length > 0 && !loading
					? products.map((producto) => (
							<CatalogueItem
								producto={producto}
								key={producto.id}
								history={history}
							/>
					  ))
					: !loading &&
					  category && (
							<h1>No se han encontrado productos de esa categoria</h1>
					  )}
			</div>
			{loading && <h1>Loading...</h1>}
		</div>
	);
};

export default Catalogue;
