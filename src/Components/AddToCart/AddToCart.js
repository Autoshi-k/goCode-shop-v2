import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './AddToCart.css';

function AddToCart({ id }) {

  const {cart, setCart} = useContext(CartContext);
  const addToCart = () => cart[id] ? setCart({...cart, [id]: cart[id] + 1}): setCart ({...cart, [id]: 1});

  return (
    <div className="add-to-cart" onClick={ addToCart }>Add To Cart</div>
  );
}

export default AddToCart;