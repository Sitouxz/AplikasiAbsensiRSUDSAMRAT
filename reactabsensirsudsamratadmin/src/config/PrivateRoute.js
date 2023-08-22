import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute({ element, path }) {
  const accessToken = Cookies.get("access_token");

  return accessToken ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
