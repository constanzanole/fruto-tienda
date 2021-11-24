import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CatalogueItem from '../CatalogueItem/CatalogueItem';
import './Catalogue.css';

const Catalogue = ({ greeting, category, products, loading }) => {
  const [filtered, setFiltered] = useState(products);

  const changeCategory = () => {
    setFiltered(
      !category
        ? products
        : products.filter((prod) => prod.category === category)
    );
  };

  useEffect(() => {
    changeCategory();
  }, [category]);

  const history = useHistory();

  return (
    <div>
      <h1>{greeting}</h1>
      <div className='card-catalogue'>
        {filtered.length > 0 && !loading
          ? filtered.map((producto) => (
              <CatalogueItem
                producto={producto}
                key={producto.productId}
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
