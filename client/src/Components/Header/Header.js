import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faCircle } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@mui/material/Drawer';
// import { Drawer } from 'antd';


// CSS
import './Header.css';
import Cart from "../Cart/Cart";


function Header() {

  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState(open);
  }

  // const showDrawer = () => setState(true);
  // const onClose = () => setState(false);
  //   console.log(state);
  //   // console.log(open);
  //   setState(open);
  // };


  return (
    <div className="header">
      <div className="header-container">
        <h1>GoCode<span>Shop</span></h1>
        <div className="shopping-bag-layers" onClick={ toggleDrawer(true) }>
          <FontAwesomeIcon icon={ faShoppingBag } size="2x" className="shop-bag" />
        </div>
        <Drawer 
          anchor="right" 
          open={ state } 
          onClose={ toggleDrawer(false) } >           
          <Cart/>
        </Drawer>
      
          {/* <FontAwesomeIcon icon={ faCircle } color="green" size="lg"/> */}
        </div>
      </div>
    // </div>
  )
}

export default Header;
