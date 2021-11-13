import { List, ListItem, Slider } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import React, { useState, useContext } from "react";
import FliterIndex from "../../context/FilterIndex";
import { ProductsContext } from '../../context/ProductProvider';
import { FormHelperText } from "@mui/material";

// CSS
import './Filters.css';

function Filters() {

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const { filterIndex, setFilterIndex } = useContext(FliterIndex);
  const categories = useContext(ProductsContext);

  const handleListItemClick = (event, index) => setFilterIndex([filterIndex[0], index]);
  const handleChange = (event, newValue) => setFilterIndex([newValue, filterIndex[1]]);
  return (
    <div className="filters">
      <ListItem>Filter by price: </ListItem>
      <Slider 
      getAriaLabel={() => 'Temperature range'}
      value={ filterIndex[0] }
      onChange={ handleChange }
      valueLabelDisplay="auto"
      max='1000'
      color="secondary"
      />
      <FormHelperText>Price range between ${ filterIndex[0][0] } and ${ filterIndex[0][1] }</FormHelperText>
      <List component="nav" aria-label="main mailbox folders">
        { categories.categories.map((category, index) => {
          return (
            <ListItemButton
              selected={ filterIndex === index }
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemText primary={ category }/>
            </ListItemButton>
          );
        }) }
      </List>
    </div>
  );
}

export default Filters;