import React from "react";
import { Link } from "react-router-dom";
import { Typography, TextField, Button, Grid } from "@mui/material";
import userService from "../services/UserService";
import Pro from "./auth/Pro";

const Profile = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Pro>
      <h1>Profile</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <div style={{ width: "60%" }}>
          <Grid container>
            <Grid item xs={4}>
              <h1>Name:</h1>
              {console.log(userService.getLoggedInUser())}
            </Grid>
            <Grid item xs={8}>
              <h1>{userService.getLoggedInUser().name}</h1>
            </Grid>
            <Grid item xs={4}>
              <h1>Email:</h1>
            </Grid>
            <Grid item xs={8}>
              <h1>{userService.getLoggedInUser().email}</h1>
            </Grid>
          </Grid>
          <br />
        </div>
      </div>
    </Pro>
  );
};

export default Profile;
