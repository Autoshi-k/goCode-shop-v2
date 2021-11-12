import { List } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import React, { useState, useContext } from "react";
import FliterIndex from "../../context/FilterIndex";
import { ProductsContext } from '../../context/ProductProvider';

// CSS
import './Filters.css';

function Filters() {

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const { filterIndex, setFilterIndex } = useContext(FliterIndex);
  const handleListItemClick = (event, index) => setFilterIndex(index);
  const categories = useContext(ProductsContext);

  return (
    <div className="filters">
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