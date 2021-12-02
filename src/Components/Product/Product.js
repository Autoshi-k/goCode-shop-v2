import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';
import './Product.css';

function Product({ key, product }) {
  // console.log(product._id);
  return (
    <div className="product">
      <Link to={`/product/${ product._id }`}>
        <img src={ product.image } alt={ product.title }/>
        <h2>{ product.title }</h2>
        <p>${ product.price }</p>
      </Link>
      <AddToCart id={ product.id }/>
    </div>
  );
}

export default Product;