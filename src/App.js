import React, { useContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { ProductsContext } from './context/ProductProvider';
import Products from './Components/Products/Products';
import Filters from './Components/Filters/Filters';
import FliterIndex from './context/FilterIndex';
import { CartContext } from './context/CartContext';

function App() {
  const context = useContext(ProductsContext); 
  const [filterIndex, setFilterIndex] = useState(0);
  const [cart, setCart] = useState({});

  return (
      <CartContext.Provider value = { {cart, setCart} }>
        <div className="App">
          <Header />
          <div className="main">
            <FliterIndex.Provider value={ {filterIndex, setFilterIndex} }>
              <Products />
              <Filters categories={ context[0] }/>
            </FliterIndex.Provider>
          </div>
        </div>
      </CartContext.Provider>
  );
}

export default App;
