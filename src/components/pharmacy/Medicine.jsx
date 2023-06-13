import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import medicineService from "../../services/MedicineService";
import { useNavigate } from "react-router-dom";
import userService from "../../services/UserService";
import download from "../../download.jpg";
import cartService from "../../services/CartService";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Medicine = ({ medicine, onDelete }) => {
  const navigate = useNavigate();
  return (
    <Grid item sx={4}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={download} />
              {/* <img src="../../dwonload.jpg" alt="complex" /> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {medicine.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {medicine.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {medicine.quantity}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {userService.isAdmin() && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={(e) => {
                        navigate("/pharmacy/update/" + medicine._id);
                      }}
                    >
                      Update
                    </Button>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  {!userService.isAdmin() && (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => {
                        cartService
                          .addCartItem({
                            userId: userService.getLoggedInUser()._id,
                            product: medicine._id,
                            quantity: 1,
                          })
                          .then((data) => {
                            console.log(data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Add to cart
                    </Button>
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {userService.isAdmin() && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      medicineService
                        .deleteMedicine(medicine._id)
                        .then((data) => {
                          console.log(data);
                          onDelete();
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Remove
                  </Button>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Medicine;
