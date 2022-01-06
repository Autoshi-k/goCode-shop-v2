import React, { useContext } from "react";

// Context
import FliterIndex from "../../context/FilterIndex";
import { ProductsContext } from '../../context/ProductProvider';

// MUI
import { FormControl, InputLabel, List, ListItem, MenuItem, Select, Slider, useMediaQuery } from "@mui/material";
import { ListItemButton, ListItemText, FormHelperText } from "@mui/material";
import { Box } from "@mui/system";

function Filters({ priceRange }) {

  const matches = useMediaQuery('(min-width:1414px)');

  const { filter, setFilter } = useContext(FliterIndex);
  const categories = useContext(ProductsContext);

  // getting the wanted category from list
  const handleListItemClick = (event, index) => setFilter({...filter, byCategoryIndex: index});

  // getting the wanted category from select
  // need to change it to index
  const handleSelectClick = (wantedCategory) => {
    const categoryIndex = categories.categories.indexOf(wantedCategory);
    // if nothing is selected categoryIndex = -1
    if (categoryIndex !== -1) setFilter({...filter, byCategoryIndex: categoryIndex});
  }

  // change slider values (filter price)
  const handleChange = (event, newValue) => setFilter({...filter, byCost: newValue});
  return (
    <div className="filters">
      <div>
        <ListItem>Filter by price: </ListItem>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={ filter.byCost }
        onChange={ handleChange }
        valueLabelDisplay="auto"
        min={ priceRange[0] }
        max={ priceRange[1] }
        color="secondary"
        />
        <FormHelperText>Price range between ${ filter.byCost[0] } and ${ filter.byCost[1] }</FormHelperText>
      </div>

      { 
        // choose the right fliter method depends window width
        matches ?
        <div>
        <List component="nav" aria-label="main mailbox folders">
          { categories.categories.map((category, index) => {
            return (
              <ListItemButton
                selected={ filter.byCaterogyIndex === index }
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={ category }/>
              </ListItemButton>
            );
          }) }
        </List>
      </div>
        :
        <div>
          <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ categories.categories[filter.byCategoryIndex] }
              label="Category"
              onClick={(event) => handleSelectClick(event.target.getAttribute('data-value'))}
            >
              { categories.categories.map((category, index) => {
                return (
                  <MenuItem value={ category }>{ category }</MenuItem>
                );
              }) }
            </Select>
          </FormControl>
        </Box>
      </div>
      }

    </div>
  );
}

export default Filters;