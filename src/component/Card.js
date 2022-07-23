import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";

export default function MCard(props) {
  const { isEmpty, id, name, price, img } = props.item;
  let btnChange;
  let btnColor = "dager";
  if (isEmpty === false) {
    btnChange = "ADD To CART";
  } else {
    btnChange = "REMOVE FROM CART";
  }
  const ChangeClassesStyle = () => {
    let classStyle = "bg-primary text-white ";
    if (isEmpty === false) {
      btnChange = "ADD To CART";
    } else {
      btnChange = "REMOVE FROM CART";
      classStyle = "bg-danger text-white";
    }

    return classStyle;
  };
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <CardMedia
        style={{ width: "100%" }}
        className={"bg-black"}
        component="img"
        height="160"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <div className="d-flex justify-content-between">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography className=" fs-4">{price} $</Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={ChangeClassesStyle()}
          size="small"
          onClick={() => {
            props.handlerAddToCart(props.item);
          }}
        >
          {btnChange}
          {/* Add to Cart */}
        </Button>

        {/* <Button size="small">Delete</Button> */}
      </CardActions>
    </Card>
  );
}
