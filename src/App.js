import './App.css';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { Navigation } from './components/Navigation';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ProductsProvider>
        <CartProvider>
          <Navigation />
        </CartProvider>
      </ProductsProvider>
    </ChakraProvider>
  );
}

export default App;
