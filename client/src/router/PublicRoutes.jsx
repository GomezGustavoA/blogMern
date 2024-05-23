import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  return token && user ? <Navigate to={"/private"} /> : <Outlet />;
};

export default PublicRoutes;
