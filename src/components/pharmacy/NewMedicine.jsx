import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import medicineService from "../../services/MedicineService";
import Admin from "../auth/Admin";

const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  let navigate = useNavigate();
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Medicine</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Price"
            variant="standard"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="Quantity"
            variant="standard"
            fullWidth
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              console.log("send api call to Add Medicine");
              medicineService
                .addMedicine({ name, price, quantity })
                .then((data) => {
                  console.log(data);
                  navigate("/pharmacy");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default NewProduct;
