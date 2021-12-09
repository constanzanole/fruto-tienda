import React, { useCallback, useContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { ProductsContext } from '../context/ProductsContext';
import { CartScreen } from '../pages/CartScreen';
import Catalogue from './Catalogue/Catalogue';
import { DetailItem } from './DetailItem/DetailItem';
import NavBar from './NavBar/NavBar';

export const Navigation = () => {
  const { products, fetchProducts, loading } = useContext(ProductsContext);
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <NavBar setCategory={setCategory} />
            {products.length > 0 && !loading && (
              <Catalogue
                greeting={'TIENDA ONLINE DE @FRUTO.AR'}
                category={category}
                products={products}
                loading={loading}
              />
            )}
          </Route>
          <Route exact path='/producto/:productId'>
            <NavBar />
            <DetailItem />
          </Route>
          <Route path='/cart'>
            <CartScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
