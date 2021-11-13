import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ProductsContext } from '../../context/ProductProvider';
import { CartContext } from '../../context/CartContext';
import Product from '../Product/Product';
import InCart from '../InCart/InCart';

import './Cart.css';

function Cart() {

  const cart = useContext(CartContext);
  console.log(cart);
  // console.log(cart.cart);

  return (
    <List>
      <div className="cart" style={{width: 500}}>
        <h2 className="cart-title">Cart</h2>
        <h4 className="cart-information">You Have 2 Items In Cart</h4>
        <Divider />
        <div className="list-in-cart">
          { Object.keys(cart.cart).map((index, key) => <InCart index={ index } key ={ key } amount={ cart.cart[index] }/>) }
        </div>
        <div className="checkout-btn">proceed to checkout</div>
      </div>
    </List>
  );
}

export default Cart;