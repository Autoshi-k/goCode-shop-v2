import { List, ListItem, Slider } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import React, { useContext } from "react";
import FliterIndex from "../../context/FilterIndex";
import { ProductsContext } from '../../context/ProductProvider';
import { FormHelperText } from "@mui/material";

// CSS
import './Filters.css';

function Filters({ priceRange }) {

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const { filter, setFilter } = useContext(FliterIndex);
  const categories = useContext(ProductsContext);
  console.log(priceRange);
  const handleListItemClick = (event, index) => setFilter({...filter, byCategoryIndex: index});
  const handleChange = (event, newValue) => setFilter({...filter, byCost: newValue});
  return (
    <div className="filters">
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
  );
}

export default Filters;