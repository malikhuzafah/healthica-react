import React from "react";
import Pro from "../auth/Pro";
import { Grid, Button, List, Typography } from "@mui/material";
import CartItem from "./CartItem";
import cartService from "../../services/CartService";
import userService from "../../services/UserService";
import orderService from "../../services/OrdersService";
import medicineService from "../../services/MedicineService";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const getCartItems = () => {
    cartService
      .getCartItems(userService.getLoggedInUser()._id)
      .then((data) => {
        console.log(data);
        setCartItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkout = async (e) => {
    var products = [];
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
      var medicine = await getMedicine(cartItems[i].product);
      console.log(medicine);
      products.push(medicine.name + " x " + cartItems[i].quantity);
      total += cartItems[i].total;
    }
    console.log("adding order");
    orderService
      .addOrder({
        userId: userService.getLoggedInUser()._id,
        products: products,
        total: total,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    for (var i = 0; i < cartItems.length; i++) {
      var medicine = getMedicine(cartItems[i].product);
      var quan = medicine.quantity - cartItems[i].quantity;
      medicineService.updateMedicine(medicine._id, {
        name: medicine.name,
        price: medicine.price,
        quantity: quan,
      });

      cartService
        .deleteCartItem(cartItems[i]._id)
        .then((data) => {
          console.log(data);
          getCartItems();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  async function getMedicine(id) {
    var medicine;
    await medicineService
      .getMedicine(id)
      .then((data) => {
        console.log(data);
        medicine = data;
      })
      .catch((err) => {
        console.log(err);
      });
    return medicine;
  }

  React.useEffect(getCartItems, []);

  return (
    <Pro>
      <div style={{ padding: "100px" }}>
        <h1>Cart</h1>
        <Button variant="contained" color="primary" onClick={checkout}>
          Checkout
        </Button>
        {cartItems.length === 0 ? (
          <p>No orders placed</p>
        ) : (
          <List>
            {cartItems.map((cartItem, index) => (
              <CartItem
                key={index}
                cartItem={cartItem}
                onDelete={getCartItems}
              />
            ))}
          </List>
        )}
      </div>
    </Pro>
  );
};

export default Cart;
