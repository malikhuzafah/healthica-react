import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import React from "react";
import medicineService from "../../services/MedicineService";
import cartService from "../../services/CartService";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CartItem = ({ cartItem, onDelete }) => {
  const [medicine, setMedicine] = React.useState([]);

  const getMedicine = () => {
    medicineService
      .getMedicine(cartItem.product)
      .then((data) => {
        console.log(data);
        setMedicine(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getTotal() {
    return (cartItem.total = cartItem.quantity * medicine.price);
  }

  React.useEffect(getMedicine, []);

  return (
    <ListItem
      secondaryAction={
        <>
          {"$" + getTotal()}
          <IconButton
            edge="end"
            onClick={(e) => {
              var quantity = cartItem.quantity - 1;
              cartService
                .updateCartItem(cartItem._id, { quantity })
                .then((data) => {
                  console.log(data);
                  onDelete();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          {cartItem.quantity}
          <IconButton
            edge="end"
            onClick={(e) => {
              var quantity = cartItem.quantity + 1;
              cartService
                .updateCartItem(cartItem._id, { quantity })
                .then((data) => {
                  console.log(data);
                  onDelete();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => {
              cartService
                .deleteCartItem(cartItem._id)
                .then((data) => {
                  console.log(data);
                  onDelete();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={medicine.name + " X " + cartItem.quantity} />
    </ListItem>
  );
};

export default CartItem;
