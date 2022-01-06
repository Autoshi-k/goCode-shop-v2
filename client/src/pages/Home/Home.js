import React, { useContext, useEffect, useState } from 'react';

// Context
import { ProductsContext } from '../../context/ProductProvider';

// Components
import Products from '../../Components/Products/Products';
import Filters from '../../Components/Filters/Filters';
import FliterIndex from '../../context/FilterIndex';

function Home() {
  const {products} = useContext(ProductsContext); 
  const [priceRange, setPriceRange] = useState(['']);

  useEffect(() => {
    let prices = []; 
    if (products.length) {
      products.map(product => prices.push(product.price));
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
    }
}, [products]);
  // console.log(priceRange);
  // const [filterIndex, setFilterIndex] = useState([[100, 160], 0]);
  const [filter, setFilter] = useState({byCost: [100, 160], byCategoryIndex: 0});
  return (
        <div className="App">
          <div className="main">
              <FliterIndex.Provider value={ {filter, setFilter} }>
                  <Products />
                  <Filters priceRange={ priceRange }/>
              </FliterIndex.Provider>
          </div>
        </div>
  );
}

export default Home;