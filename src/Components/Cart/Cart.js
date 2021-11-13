import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ProductsContext } from '../../context/ProductProvider';
import { CartContext } from '../../context/CartContext';
import Product from '../Product/Product';
import InCart from '../InCart/InCart';

function Cart() {

  const cart = useContext(CartContext);
  console.log(cart);
  // console.log(cart.cart);

  return (
    <List>
      <div className="cart" style={{width: 500}}>
        <h2>Cart</h2>
        <h4>You Have 2 Items In Cart</h4>
        <Divider />
        { Object.keys(cart.cart).map((index, key) => <InCart index={ index } key ={ key } amount={ cart.cart[index] }/>) }

      </div>
    </List>
  );
}

export default Cart;