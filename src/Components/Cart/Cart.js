import React, { useContext } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { CartContext } from '../../context/CartContext';
import InCart from '../InCart/InCart';

import './Cart.css';

function Cart() {

  const cart = useContext(CartContext);
  const itemsAmount = Object.keys(cart.cart).length ? Object.keys(cart.cart).reduce((pre, key) => pre + cart.cart[key], 0) : 0;
  return (
    <List>
      <div className="cart" style={{width: 500}}>
        <h2 className="cart-title">Cart</h2>
        <h4 className="cart-information">You Have { itemsAmount } Items In Cart</h4>
        <Divider />
        <div className="list-in-cart">
          { Object.keys(cart.cart).map((index, key) => cart.cart[index] > 0 && <InCart index={ index } key ={ key } amount={ cart.cart[index] }/>) }
        </div>
        <div className="checkout-btn">proceed to checkout</div>
      </div>
    </List>
  );
}

export default Cart;