import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddToCart from "../../Components/AddToCart/AddToCart";
import './ProductPage.css'
import { Box } from "@mui/system";

function ProductPage () {
  const { id } = useParams();
  // console.log(useParams());
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/products/${id}`).then(prom => prom.json().then(data => setProduct(data))).catch(e => console.log(e));
  }, [id])
  // console.log(id);
  // console.log(product);
  return (
    
    <div className="product-page">
      { product && <Card sx={{ maxWidth: 1000, display: "flex", padding: "2em" }}>
        <CardMedia
          sx={{ objectFit: "scale-down" }}
          component="img"
          // height="500"
          image={product.image}
          alt={product.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", width: 400 }}>
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
        <CardActionArea>
              <AddToCart id={ product._id }/>
        </CardActionArea>
        </Box>

      </Card>}
    </div>
  );
}

export default ProductPage;