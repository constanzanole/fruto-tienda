import logo from './logo.svg';
import HomePage from './pages/Home';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Catalogue from './components/Catalogue/Catalogue';
import productos from './data/productos';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DetailItem } from './components/DetailItem/DetailItem';
import { useContext, useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './pages/CartScreen';
import { ProductsContext, ProductsProvider } from './context/ProductsContext';

function App() {
	const [category, setCategory] = useState();

	return (
		<ProductsProvider>
			<CartProvider>
				<Router>
					<div className="App">
						<Switch>
							<Route exact path="/">
								<Navbar setCategory={setCategory} />
								<Catalogue
									greeting={'TIENDA ONLINE DE @FRUTO.AR'}
									category={category}
								/>
							</Route>
							<Route exact path="/producto/:productId">
								<Navbar />
								<DetailItem />
							</Route>
							<Route path="/cart">
								<CartScreen />
							</Route>
						</Switch>
					</div>
				</Router>
			</CartProvider>
		</ProductsProvider>
	);
}

export default App;
