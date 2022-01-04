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

  const matches = useMediaQuery(useTheme().breakpoints.up('sm'));

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
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
              <FliterIndex.Provider value={ {filter, setFilter} }>
                <Grid item md={10} xs={4} >
                  <Products />
                </Grid>
                <Grid item md={2} sx={4} >
                  <Filters priceRange={ priceRange }/>
                </Grid>
              </FliterIndex.Provider>
            </Grid>
          </div>
        </div>
  );
}

export default Home;