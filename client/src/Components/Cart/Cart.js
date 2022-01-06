import React, { useContext } from 'react';

// Context
import { CartContext } from '../../context/CartContext';

// Components
import InCart from '../InCart/InCart';

// MUI
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function Cart() {
  
  const cart = useContext(CartContext);
  const itemsAmount = Object.keys(cart.cart).length ? Object.keys(cart.cart).reduce((pre, key) => pre + cart.cart[key], 0) : 0;
  return (
    <List>
      <div className="cart" style={{width: '80vw', maxWidth: '500px'}}>
        <h2 className="cart-title">Cart</h2>
        <h4 className="cart-information">You Have { itemsAmount } Items In Cart</h4>
        <Divider />
        <div className="list-in-cart">
          { Object.keys(cart.cart).map((index, key) => cart.cart[index] > 0 && <InCart id={ index } key ={ key } amount={ cart.cart[index] }/>) }
        </div>
        <div className="checkout-btn">proceed to checkout</div>
      </div>
    </List>
  );
}

export default Cart;