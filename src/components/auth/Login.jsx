import { TextField, Button, Typography } from "@mui/material";
import React from "react";
import userService from "../../services/UserService";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Auth>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <div style={{ width: "60%" }}>
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService
                .login(email, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/";
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Login
          </Button>
          <Typography>
            Dont Have An Account? <Link to="/register">Register</Link>
          </Typography>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
