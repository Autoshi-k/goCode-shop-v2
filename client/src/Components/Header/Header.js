import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faCircle } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@mui/material/Drawer';

// CSS
import './Header.css';
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

function Header() {

  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState(open);
  }

  return (
    <div className="header">
      <div className="header-container">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><h1>GoCode<span>Shop</span></h1></Link>
        <div className="shopping-bag-layers" onClick={ toggleDrawer(true) }>
          <FontAwesomeIcon icon={ faShoppingBag } size="2x" className="shop-bag" />
        </div>
        <Drawer 
          anchor="right" 
          open={ state } 
          onClose={ toggleDrawer(false) } >           
          <Cart/>
        </Drawer>
      
        </div>
      </div>
  )
}

export default Header;
