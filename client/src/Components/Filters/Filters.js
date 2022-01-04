import { FormControl, InputLabel, List, ListItem, MenuItem, OutlinedInput, Select, Slider, useMediaQuery } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import React, { useContext } from "react";
import FliterIndex from "../../context/FilterIndex";
import { ProductsContext } from '../../context/ProductProvider';
import { FormHelperText } from "@mui/material";

// CSS
import './Filters.css';
import { Box } from "@mui/system";

function Filters({ priceRange }) {

  const matches = useMediaQuery('(min-width:1414px)');

  
  const { filter, setFilter } = useContext(FliterIndex);
  const categories = useContext(ProductsContext);
  const handleListItemClick = (event, index) => setFilter({...filter, byCategoryIndex: index});
  const handleSelectClick = event => setFilter({...filter, byCaterogyIndex: event.target.value});
  const handleChange = (event, newValue) => setFilter({...filter, byCost: newValue});
  console.log(categories.categories[filter.byCategoryIndex]);
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
              // onChange={ (event) => handleListItemClick(event, index) }
              onClick={event => setFilter({...filter, byCaterogyIndex: event.target.value})}
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