import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddToCart from "../../Components/AddToCart/AddToCart";
import './ProductPage.css'

function ProductPage () {
  const { id } = useParams();
  // console.log(useParams());
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/products/${id}`).then(prom => prom.json().then(data => setProduct(data))).catch(e => console.log(e));
  }, [id])
  console.log(id);
  console.log(product);
  return (
    
    <div className="product-page">
      { product && <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="140"
            image={product.image}
            alt={product.title}
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="body2" >
                {product.title}
                <br />
                {product.price}
              </Typography>
              {/* <AddToCart id={ product.id }/> */}
            </CardContent>
        </CardActionArea>
      </Card>}
    </div>
  );
}

export default ProductPage;