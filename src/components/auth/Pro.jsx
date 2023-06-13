import React, { useEffect } from "react";
import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
const Pro = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userService.isLoggedIn()) {
      navigate("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default Pro;
