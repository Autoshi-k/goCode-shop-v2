import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { ProductsContext } from './context/ProductProvider';
import Products from './Components/Products/Products';
import Filters from './Components/Filters/Filters';
import FliterIndex from './context/FilterIndex';
import { CartContext } from './context/CartContext';

function App() {
  const context = useContext(ProductsContext); 
  // console.log(context); 
  const [priceRange, setPriceRange] = useState(['']);
  
  useEffect(() => {
    let prices = []; 
    if (!context.products.lenght) {
      context.products.map(product => prices.push(product.price));
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
    }
}, [context.products]);
 
  const [filterIndex, setFilterIndex] = useState([[100, 160], 0]);
  const [cart, setCart] = useState({});
  return (
      <CartContext.Provider value = { {cart, setCart} }>
        <div className="App">
          <Header />
          <div className="main">
            <FliterIndex.Provider value={ {filterIndex, setFilterIndex} }>
              <Products />
              <Filters categories={ context[0] } priceRange={ priceRange }/>
            </FliterIndex.Provider>
          </div>
        </div>
      </CartContext.Provider>
  );
}

export default App;
