import logo from './logo.svg';
import HomePage from './pages/Home';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Catalogue from './components/Catalogue/Catalogue';
import productos from './data/productos';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DetailItem } from './components/DetailItem/DetailItem';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState();
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Navbar setCategory={setCategory} />
            <Catalogue
              greeting={'TIENDA ONLINE DE @FRUTO.AR'}
              category={category}
            />
          </Route>
          <Route exact path='/producto/:productId'>
            <Navbar />
            <DetailItem productos={productos} />
          </Route>
          <Route path='/cart'>
            <Navbar setCategory={setCategory} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
