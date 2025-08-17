import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children }) {
  const token = Cookies.get("token"); // Verifica si el token existe
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;