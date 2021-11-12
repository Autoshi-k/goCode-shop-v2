import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Cart({ toggleDrawer, nameMe }) {
  console.log(toggleDrawer);
  return (
    <div>
      <Box
       role="presentation"
       onClick={ toggleDrawer(false) }
      //  onKeyDown={ toggleDrawer(false) }
      > 
        <ListItem>
          hellow there
        </ListItem>
        <ListItem>
          hellow there
        </ListItem>
      </Box>
    </div>
  );
}

export default Cart;