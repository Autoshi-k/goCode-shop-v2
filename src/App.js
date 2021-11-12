import React, { useContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { ProductsContext } from './context/ProductProvider';
import Products from './Components/Products/Products';
import Filters from './Components/Filters/Filters';
import FliterIndex from './context/FilterIndex';

function App() {
  const context = useContext(ProductsContext); 
  console.log(context);
  const [filterIndex, setFilterIndex] = useState(0);
  // console.log(setFilterIndex);
  return (
      <div className="App">
        <Header />
        <div className="main">
          <FliterIndex.Provider value={ {filterIndex, setFilterIndex} }>
            <Products />
            <Filters categories={ context[0] }/>
          </FliterIndex.Provider>
        </div>
      </div>
  );
}

export default App;
