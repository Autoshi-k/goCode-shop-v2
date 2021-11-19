import { useContext, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { CartContext } from '../../context/CartContext';
import './AddToCart.css';

function AddToCart({ id }) {

  const [loading, setLoading] = useState(false);
  // console.log(loading);

  const {cart, setCart} = useContext(CartContext);
  function addToCart() {
    setLoading(true);
    cart[id] ? setCart({...cart, [id]: cart[id] + 1}): setCart ({...cart, [id]: 1});
  }
  
  useEffect(() => {
    const interval = setTimeout(() => { 
      if (loading) {
        setLoading(false) 
      }
    } , 800);
    return () => clearTimeout(interval);
  }, [loading])

  return (
    <> 
      { !loading ? 
      <div className="add-to-cart" onClick={ addToCart }>Add To Cart</div>
      : <div className="add-to-cart">{ loading && <CircularProgress color="secondary" /> }Adding</div>
      }
    </>
  );
}

export default AddToCart;