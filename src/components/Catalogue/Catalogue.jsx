import React from 'react';
import CatalogueItem from '../CatalogueItem/CatalogueItem';

const Catalogue = ({ greeting, productos }) => {
	return (
		<div>
			<h1>{greeting}</h1>
			<div>
				{productos.map((producto) => (
					<CatalogueItem producto={producto} />
				))}
			</div>
		</div>
	);
};

export default Catalogue;
