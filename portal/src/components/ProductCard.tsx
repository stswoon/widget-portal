import { FC, memo } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ProductCardProps {
  name: string;
  imgSrc: string;
  description: string;
}

export const ProductCard: FC<ProductCardProps> = memo(({ name, imgSrc, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="taProductCard">
      <CardMedia component="img" alt={"img for product " + name} height="140" image={imgSrc} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" endIcon={<ArrowForwardIosIcon/>}>
          Show
        </Button>
      </CardActions>
    </Card>
  );
});
