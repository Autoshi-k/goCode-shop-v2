import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext();

const fakeData = [
  {
    'id': 1, 
    'title': 'Weekend Collective jogger with all over monogram print in mono',
    'price': 160,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-jogger-with-all-over-monogram-print-in-mono/200326498-1-black?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  }, {
    'id': 2, 
    'title': 'ASOS Weekend Collective canvas tote bag in sage',
    'price': 100,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-canvas-tote-bag-in-sage/21381049-1-sage?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 3, 
    'title': 'ASOS Weekend Collective oversized jogger with varsity print in black',
    'price': 145,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-oversized-jogger-with-varsity-print-in-black/23971978-1-black?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 4, 
    'title': 'ASOS Weekend Collective oversized t-shirt dress with coloured logo in washed charcoal',
    'price': 105,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-oversized-t-shirt-dress-with-coloured-logo-in-washed-charcoal/200300611-1-charcoal?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 5, 
    'title': 'ASOS Weekend Collective co-ord oversized zip through hoodie with logo in ice marl',
    'price': 170,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-co-ord-oversized-zip-through-hoodie-with-logo-in-ice-marl/23054755-1-greymarl?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 6, 
    'title': 'ASOS Weekend Collective oversized puffer jacket in black',
    'price': 290,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-oversized-puffer-jacket-in-black/23790692-1-black?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 7, 
    'title': 'Glamorous relaxed straight leg trousers in green marble',
    'price': 180,
    'image': 'https://images.asos-media.com/products/glamorous-relaxed-straight-leg-trousers-in-green-marble/200926654-1-greenmarble?$n_320w$&wid=317&fit=constrain',
    'category': "Party Pants"
  } ,{
    'id': 8, 
    'title': 'Style Cheat relaxed sequin shirt and tailored trouser co-ord in champagne',
    'price': 200,
    'image': 'https://images.asos-media.com/groups/style-cheat-relaxed-sequin-shirt-and-tailored-trouser-co-ord-in-champagne/60857-group-1?$n_320w$&wid=317&fit=constrain',
    'category': "Party Pants"
  } ,{
    'id': 9, 
    'title': 'ASOS DESIGN oversized ruched clutch in beige with detachable shoulder chain',
    'price': 130,
    'image': 'https://images.asos-media.com/products/asos-design-oversized-ruched-clutch-in-beige-with-detachable-shoulder-chain/21312137-1-beige?$n_320w$&wid=317&fit=constrain',
    'category': "Going OUT-OUT"
  } ,{
    'id': 10, 
    'title': 'French Connection Fiki midi wrap dress in all over pink sequin',
    'price': 975,
    'image': 'https://images.asos-media.com/products/french-connection-fiki-midi-wrap-dress-in-all-over-pink-sequin/201122956-1-pinksequin?$n_320w$&wid=317&fit=constrain',
    'category': "Going OUT-OUT"
  } ,{
    'id': 11, 
    'title': 'adidas Originals adicolour locked up logo track pant in khaki',
    'price': 245,
    'image': 'https://images.asos-media.com/products/adidas-originals-adicolour-locked-up-logo-track-pant-in-khaki/24365338-1-khaki?$n_320w$&wid=317&fit=constrain',
    'category': "Winter essentials"
  } ,{
    'id': 12, 
    'title': 'adidas Originals Essentials sweatshirt in crimson',
    'price': 210,
    'image': 'https://images.asos-media.com/products/adidas-originals-essentials-sweatshirt-in-crimson/200468814-1-crimson?$n_320w$&wid=317&fit=constrain',
    'category': "Winter essentials"
  } ,{
    'id': 13, 
    'title': 'adidas Originals Essentials joggers in mint',
    'price': 146,
    'image': 'https://images.asos-media.com/products/adidas-originals-essentials-joggers-in-mint/23476154-1-green?$n_320w$&wid=317&fit=constrain',
    'category': "Winter essentials"
  } ,{
    'id': 14, 
    'title': 'Reclaimed Vintage inspired organic cotton blend motor badge sweat in black',
    'price': 185,
    'image': 'https://images.asos-media.com/products/reclaimed-vintage-inspired-organic-cotton-blend-motor-badge-sweat-in-black/200962333-1-black?$n_320w$&wid=317&fit=constrain',
    'category': "Reclaimed Vintage"
  } ,{
    'id': 15, 
    'title': "Reclaimed Vintage inspired 92' relaxed mom in branding floral print co-ord",
    'price': 185,
    'image': 'https://images.asos-media.com/products/reclaimed-vintage-inspired-92-relaxed-mom-in-branding-floral-print-co-ord/201022014-1-multi?$n_320w$&wid=317&fit=constrain',
    'category': "Reclaimed Vintage"
  } ,{
    'id': 16, 
    'title': 'ASOS Weekend Collective scoop neck crop top with elastic hem in white',
    'price': 31,
    'image': 'https://images.asos-media.com/products/asos-weekend-collective-scoop-neck-crop-top-with-elastic-hem-in-white/24056913-1-white?$n_320w$&wid=317&fit=constrain',
    'category': "Weekend Collective"
  } ,{
    'id': 17, 
    'title': 'ASOS DESIGN wide leg trouser in velvet plisse in lilac swirl print',
    'price': 170,
    'image': 'https://images.asos-media.com/products/asos-design-wide-leg-trouser-in-velvet-plisse-in-lilac-swirl-print/201070367-1-multi?$n_320w$&wid=317&fit=constrain',
    'category': "Party Pants"
  } ,{
    'id': 18, 
    'title': 'COLLUSION swirl print jumpsuit in multi',
    'price': 135,
    'image': 'https://images.asos-media.com/products/collusion-swirl-print-jumpsuit-in-multi/201084924-1-multi?$n_320w$&wid=317&fit=constrain',
    'category': "Party Pants"
  } ,{
    'id': 19, 
    'title': 'Flounce London Petite satin flare trouser co-ord in purple',
    'price': 210,
    'image': 'https://images.asos-media.com/products/flounce-london-petite-satin-flare-trouser-co-ord-in-purple/200976487-1-lilac?$n_320w$&wid=317&fit=constrain',
    'category': "Party Pants"
  } ,{
    'id': 20, 
    'title': 'ASOS DESIGN embellished fringe cami with split hem in blush',
    'price': 210,
    'image': 'https://images.asos-media.com/products/asos-design-embellished-fringe-cami-with-split-hem-in-blush/200742207-1-blush?$n_320w$&wid=317&fit=constrain',
    'category': "Going OUT-OUT"
  } ,{
    'id': 21, 
    'title': 'ASOS EDITION floral sequin wrap mini dress in white and silver',
    'price': 830,
    'image': 'https://images.asos-media.com/products/asos-edition-floral-sequin-wrap-mini-dress-in-white-and-silver/200340554-1-silverwhite?$n_320w$&wid=317&fit=constrain',
    'category': "Going OUT-OUT"
  } ,{
    'id': 22, 
    'title': 'Twisted Wunder mini milkmaid dress with puff sleeves in multi swirl print',
    'price': 240,
    'image': 'https://images.asos-media.com/products/twisted-wunder-mini-milkmaid-dress-with-puff-sleeves-in-multi-swirl-print/201088625-1-multicoloured?$n_320w$&wid=317&fit=constrain',
    'category': "Going OUT-OUT"
  } ,{
    'id': 23, 
    'title': 'ASOS DESIGN waterfall parka coat in sage',
    'price': 345,
    'image': 'https://images.asos-media.com/products/asos-design-waterfall-parka-coat-in-sage/23336734-1-sage?$n_320w$&wid=317&fit=constrain',
    'category': "Winter essentials"
  } ,{
    'id': 24, 
    'title': 'New Balance Running cropped hoodie in black',
    'price': 225,
    'image': 'https://images.asos-media.com/products/new-balance-running-cropped-hoodie-in-black/23950735-1-black?$n_320w$&wid=317&fit=constrain',
    'category': "Winter essentials"
  }
]

function ProductProvider({ children }) {
  const [products, setProducts] = useState(['']);
  const [categories, setCategories] = useState(['']);
  
  function getData() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => { 
      setProducts(fakeData);
      setCategories(['All', ...fakeData.map(singleProduct => singleProduct.category).filter((value, index, array) => array.indexOf(value) === index)]);
    })
    .catch(err => console.log(err));
  }

  useEffect(function() {
    getData();
  }, []);
  
  return <ProductsContext.Provider value={ { getData, products, categories } }>{ children }</ProductsContext.Provider>;
}

export default ProductProvider;
