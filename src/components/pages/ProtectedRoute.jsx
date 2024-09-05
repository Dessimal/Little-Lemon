import React from "react";
import { Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export default ProtectedRoute;
