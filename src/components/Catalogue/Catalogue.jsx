import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ProductsContext } from '../../context/ProductsContext';
import CatalogueItem from '../CatalogueItem/CatalogueItem';
import './Catalogue.css';

const Catalogue = ({ greeting, category }) => {
	const { products, loading, fetchProducts } = useContext(ProductsContext);
	const [productos, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
		setProducts(products);
		console.log(products);
	}, []);

	const history = useHistory();

	useEffect(() => {
		if (category)
			setProducts(productos.filter((producto) => producto.tipo === category));
		else {
			setProducts(productos);
		}
	}, [category]);

	return (
		<div>
			<h1>{greeting}</h1>
			<div className="card-catalogue">
				{productos.length > 0 && !loading
					? productos.map((producto) => (
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
