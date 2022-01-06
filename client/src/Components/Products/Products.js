import { useContext } from "react";

// Componetns
import Product from "../Product/Product";

// Context
import { ProductsContext } from "../../context/ProductProvider";
import FliterIndex from "../../context/FilterIndex";

// MUI
import Divider from '@mui/material/Divider';
import { Grid } from "@mui/material";

function Products() {
  const { filter } = useContext(FliterIndex);
  const { products, categories } = useContext(ProductsContext);


  const checkRange = (product) => product.price >= filter.byCost[0] && product.price <= filter.byCost[1];

  const filterProducts = (product) => {
    if (!filter.byCategoryIndex && checkRange(product)) {
      return true;
    } else if (categories[filter.byCategoryIndex] === product.category && checkRange(product)) return true;
    return false; 
  }

  return (
    <>
      <div className="products">
        <h2 className="products-filter-title">{ categories[filter.byCategoryIndex] }</h2>
        <Divider />
        <div className="products-container">
          <Grid container   
            justifyContent="center"
            spacing={2}  
            columns={{ xs: 4, sm: 9, md: 16 }}
          >
            { products.map(product => filterProducts(product) && <Grid item sx={2} sm={4} md={4} ><Product key={ product.id } product={ product }/></Grid>) }
          </Grid>
        </div>
      </div>
    </>);
}

export default Products;