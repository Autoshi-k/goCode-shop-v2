import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { ProductsContext } from './context/ProductProvider';
import Products from './Components/Products/Products';
import Filters from './Components/Filters/Filters';
import FliterIndex from './context/FilterIndex';
import { CartContext } from './context/CartContext';

function App() {
  const {products} = useContext(ProductsContext); 
  // console.log(context); 
  const [priceRange, setPriceRange] = useState(['']);
  console.log(products);
  useEffect(() => {
    let prices = []; 
    console.log(products.length);
    if (products.length) {
      products.map(product => prices.push(product.price));
      console.log(Math.min(...prices));
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
    }
}, [products]);
 console.log(priceRange);
  // const [filterIndex, setFilterIndex] = useState([[100, 160], 0]);
  const [filter, setFilter] = useState({byCost: [100, 160], byCategoryIndex: 0});
  const [cart, setCart] = useState({});
  return (
      <CartContext.Provider value = { {cart, setCart} }>
        <div className="App">
          <Header />
          <div className="main">
            <FliterIndex.Provider value={ {filter, setFilter} }>
              <Products />
              <Filters priceRange={ priceRange }/>
            </FliterIndex.Provider>
          </div>
        </div>
      </CartContext.Provider>
  );
}

export default App;
