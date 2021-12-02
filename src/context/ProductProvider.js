import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(['']);
  const [categories, setCategories] = useState(['']);

  function getData() {
    fetch('/products')
    .then(response => response.json())
    .then(data => { 
      setProducts(data);
      setCategories(['All', ...data.map(singleProduct => singleProduct.category).filter((value, index, array) => array.indexOf(value) === index)]);
    })
    .catch(err => console.log(err));
  }

  useEffect(function() {
    getData();
    // minmax();
  }, []);
  
  return <ProductsContext.Provider value={ { getData, products, categories } }>{ children }</ProductsContext.Provider>;
}

export default ProductProvider;