import { useContext } from "react";
import Product from "../Product/Product";
import { ProductsContext } from "../../context/ProductProvider";
import FliterIndex from "../../context/FilterIndex";

// CSS
import './Products.css';

function Products() {
  const { filterIndex } = useContext(FliterIndex);
  const productsList = useContext(ProductsContext);

  const priceRange = filterIndex[0];

  const checkRange = (product) => product.price >= priceRange[0] && product.price <= priceRange[1];

  const returnProductComponent = () => {
    if (!filterIndex[1]) {
      return productsList.products.map(product => checkRange(product) && <Product key={ product.id } product={ product }/>)
    } else return productsList.products.map(product => productsList.categories[filterIndex[1]] === product.category && checkRange(product) && <Product key={ product.id } product={ product }/>)
  }

  return (
    <div className="products">
      { returnProductComponent() }
    </div>);
}

export default Products;