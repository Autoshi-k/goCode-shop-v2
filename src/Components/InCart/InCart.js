import Divider from '@mui/material/Divider';
import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductProvider";

// CSS
import './InCart.css';

function InCart({ index, key, amount }) {

  const products = useContext(ProductsContext);
  return (
    <>
      <div className="in-cart-product">
        <img src={ products.products[index - 1].image } alt={ products.products[index - 1].title }/>
          <div className="product-details">
            <h4>{ products.products[index - 1].title }</h4>
            <div className="in-cart-product-text">${ products.products[index - 1].price } x<span>{ amount }</span></div>
          </div>
          <div>remove</div>
      </div>
      <Divider />
    </>
  )
}

export default InCart;