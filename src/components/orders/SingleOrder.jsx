import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const SingleOrder = ({ order, onDelete }) => {
  const [products, setProducts] = React.useState([]);
  const getProducts = () => {
    setProducts(order.products);
    console.log(products);
  };
  React.useEffect(getProducts, []);
  return (
    <ListItem>
      <List>
        {products.map((prod, index) => (
          <ListItem key={index}>
            <ListItemText primary={index + 1 + ":  " + prod} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </ListItem>
  );
};

export default SingleOrder;
