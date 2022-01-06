import { useContext, useEffect, useState } from 'react';

// Context
import { CartContext } from '../../context/CartContext';

// MUI
import CircularProgress from '@mui/material/CircularProgress';

function AddToCart({ id }) {

  const [loading, setLoading] = useState(false);

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