import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user || !auth.token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  if (auth.token) {
    return children;
  }
  return children;
};
