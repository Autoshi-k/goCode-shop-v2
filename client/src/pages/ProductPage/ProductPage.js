import { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import AddToCart from "../../Components/AddToCart/AddToCart";

// MUI
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

import './ProductPage.css';

function ProductPage () {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`).then(prom => prom.json().then(data => setProduct(data))).catch(e => console.log(e));
  }, [id])

  return (
    
    <div className="product-page">
      { product && <>
      <div className="product-page-card">
      <CardMedia
          sx={{ objectFit: "scale-down" }}
          component="img"
          height="500"
          image={product.image}
          alt={product.title}
        />
        <div className="product-page-informations">
          <div className="product-card-informations">
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="body2" >
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" >
              PRICE: ${product.price}
            </Typography>
          </div>
        <AddToCart id={ product._id }/>
        </div>
      </div>
      {/* <Card sx={{ maxWidth: 1000, display: "flex", padding: "2em" }}>
        <CardMedia
          sx={{ objectFit: "scale-down" }}
          component="img"
          // height="500"
          image={product.image}
          alt={product.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", maxWidth: 400 }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="body2" >
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" >
                PRICE: ${product.price}
              </Typography>
            </CardContent>
              <AddToCart id={ product._id }/>
        <CardActionArea>
        </CardActionArea>
        </Box>

      </Card> */}
      </>}
    </div>
  );
}

export default ProductPage;