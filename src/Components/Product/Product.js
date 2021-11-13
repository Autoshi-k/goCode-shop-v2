import AddToCart from '../AddToCart/AddToCart';
import './Product.css';

function Product({ key, product }) {
  return (
    <div className="product">
      <img src={ product.image } alt={ product.title }/>
      <h2>{ product.title }</h2>
      <p>${ product.price }</p>
      <AddToCart id={ product.id }/>
    </div>
  );
}

export default Product;