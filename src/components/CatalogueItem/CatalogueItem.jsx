import React from 'react';

const CatalogueItem = ({ producto }) => {
    
	return (
		<div>
			<h1>{producto.nombre}</h1>
			<img src={producto.imagen} alt={producto.nombre}></img>
		</div>
	);
};

export default CatalogueItem;
