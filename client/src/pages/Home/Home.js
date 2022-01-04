import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { ProductsContext } from '../../context/ProductProvider';

// Components
import Products from '../../Components/Products/Products';
import Filters from '../../Components/Filters/Filters';
import FliterIndex from '../../context/FilterIndex';

// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';



function Home() {
  const {products} = useContext(ProductsContext); 
  const [priceRange, setPriceRange] = useState(['']);

  // true if react to breakpoint
  // const matches = useMediaQuery('(min-width:1414px)');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(matches);

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