import { Grid, Button } from "@mui/material";
import React from "react";
import medicineService from "../../services/MedicineService";
import userService from "../../services/UserService";
import Medicine from "./Medicine";
import { useNavigate } from "react-router-dom";

const Pharmacy = () => {
  const [medicines, setMedicines] = React.useState([]);

  const getData = () => {
    medicineService
      .getMedicines()
      .then((data) => {
        console.log(data);
        setMedicines(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Pharmacy</h1>

      {userService.isAdmin() && (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            navigate("/pharmacy/new");
          }}
        >
          Add medicine
        </Button>
      )}
      {medicines.length === 0 ? (
        <p>There are no Medicines</p>
      ) : (
        <Grid container spacing={8}>
          {medicines.map((medicine, index) => (
            <Medicine key={index} medicine={medicine} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Pharmacy;
