import React from "react";
import { Route, Redirect, Routes } from "react-router-dom";

const Protected = ({ component, ...some }) => {
  var RenderComponents = component;
  console.log(component);
  console.log(some);
  return (
    <Routes>
      <Route
        {...some}
        render={(props) => {
          return true ? (
            <RenderComponents {...props} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          );
        }}
      />
    </Routes>
  );
};

export default Protected;
