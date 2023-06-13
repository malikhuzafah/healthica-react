import React from "react";
import SingleOrder from "./SingleOrder";
import ordersService from "../../services/OrdersService";
import { List, Typography, Divider } from "@mui/material";
import Pro from "../auth/Pro";
const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  const getOrders = () => {
    ordersService
      .getOrders()
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getOrders, []);

  return (
    <Pro>
      <div style={{ padding: "100px" }}>
        <h1>Orders</h1>
        {orders.length === 0 ? (
          <p>No orders placed</p>
        ) : (
          <List>
            {orders.map((order, index) => (
              <>
                <Typography variant="h4">Order # {index + 1}</Typography>
                <SingleOrder key={index} order={order} onDelete={getOrders} />
                <Divider />
              </>
            ))}
          </List>
        )}
      </div>
    </Pro>
  );
};

export default Orders;
