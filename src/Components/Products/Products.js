import { useContext } from "react";
import Product from "../Product/Product";
import { ProductsContext } from "../../context/ProductProvider";
import FliterIndex from "../../context/FilterIndex";

// CSS
import './Products.css';

function Products() {
  const { filterIndex } = useContext(FliterIndex);
  const productsList = useContext(ProductsContext);

  const returnProductComponent = () => {
    if (!filterIndex) {
      return productsList.products.map(product => <Product key={ product.id } product={ product }/>)
    } else return productsList.products.map(product => productsList.categories[filterIndex] === product.category && <Product key={ product.id } product={ product }/>)
  }

  return (
    <div className="products">
      { returnProductComponent() }
    </div>);
}

export default Products;