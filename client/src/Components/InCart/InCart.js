import React, { useContext } from "react";

// Context
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from "../../context/ProductProvider";

// MUI
import Divider from '@mui/material/Divider';

function InCart({ id, key, amount }) {

  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const product = products.find(element => element._id === id);

  const removeItem = () => {
    setCart({...cart, [id]: cart[id] - 1});
  }
  return (
    <>
      <div className="in-cart-product">
        <img src={ product.image } alt={ product.title }/>
          <div className="product-details">
            <h4>{ product.title }</h4>
            <div className="in-cart-product-text">${ product.price } x<span>{ amount }</span></div>
          </div>
          <div className="remove" onClick={ removeItem }>remove</div>
      </div>
      <Divider />
    </>
  )
}

export default InCart;