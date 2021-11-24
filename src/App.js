import './App.css';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
