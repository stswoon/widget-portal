import { FC, memo } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LINKS, ROUTES } from "@/constants/routes.const";

interface ProductCardProps {
  name: string;
  imgSrc?: string;
  description?: string;
}

export const ProductCard: FC<ProductCardProps> = memo(props => {
  const productImgSrc = props.imgSrc ? ROUTES.productImg(props.imgSrc) : ROUTES.defaultProductImg;

  return (
    <Card
      className="taProductCard"
      sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={productImgSrc}
        alt={`img for product ${props.name}`}
        sx={{ objectFit: 'scale-down' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="large" endIcon={<ArrowForwardIosIcon />} href={LINKS.product(props.name)}>
          Show
        </Button>
      </CardActions>
    </Card>
  );
});

ProductCard.displayName = "ProductCard";
