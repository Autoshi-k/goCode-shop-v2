import { useContext, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { CartContext } from '../../context/CartContext';
import './AddToCart.css';

function AddToCart({ id }) {

  const [loading, setLoading] = useState(true);
  const {cart, setCart} = useContext(CartContext);
  const addToCart = () => {
    setLoading(true);
    cart[id] ? setCart({...cart, [id]: cart[id] + 1}): setCart ({...cart, [id]: 1})
  }

  useEffect(() => {
    const timer = setTimeout(setLoading(false) , 1000);
    return () => clearTimeout(timer); 
  }, [cart]);


  return (
    <div className="add-to-cart" onClick={ addToCart }>{ loading && <CircularProgress color="secondary" /> }Add To Cart</div>
  );
}

export default AddToCart;