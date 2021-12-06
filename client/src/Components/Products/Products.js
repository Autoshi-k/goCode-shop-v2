import { useContext } from "react";
import Product from "../Product/Product";
// MUI
import Divider from '@mui/material/Divider';
// CONTEXT
import { ProductsContext } from "../../context/ProductProvider";
import FliterIndex from "../../context/FilterIndex";
// CSS
import './Products.css';

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
          { products.map(product => filterProducts(product) && <Product key={ product.id } product={ product }/>) }
        </div>
      </div>
    </>);
}

export default Products;