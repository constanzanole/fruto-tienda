import logo from './logo.svg';
import HomePage from './pages/Home';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Catalogue from './components/Catalogue/Catalogue';
import productos from './data/productos';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Catalogue greeting={'TIENDA ONLINE DE @FRUTO.AR'} />
		</div>
	);
}

export default App;
