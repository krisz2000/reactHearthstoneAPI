import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ isAuthenticated, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? render(props) : <Redirect to={"/login"} />
      }
    />
  );
}
