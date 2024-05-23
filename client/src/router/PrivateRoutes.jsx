import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  return token && user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
