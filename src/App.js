import logo from './logo.svg';
import HomePage from './pages/Home';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Catalogue from './components/Catalogue/Catalogue';
import productos from './data/productos';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DetailItem } from './components/DetailItem/DetailItem';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Navbar />
						<Catalogue greeting={'TIENDA ONLINE DE @FRUTO.AR'} />
					</Route>
					<Route exact path="/producto/:productId">
						<Navbar />
						<DetailItem productos={productos} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
