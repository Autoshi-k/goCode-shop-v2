import { Link } from 'react-router-dom';

// Components
import AddToCart from '../AddToCart/AddToCart';


function Product({ key, product }) {
  return (
    <div className="product">
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/product/${ product._id }`}>
        <img src={ product.image } alt={ product.title }/>
        <h2>{ product.title }</h2>
        <p>${ product.price }</p>
      </Link>
      <AddToCart id={ product._id }/>
    </div>
  );
}

export default Product;