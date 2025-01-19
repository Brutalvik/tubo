import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { CircularProgress } from "@heroui/react";

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <CircularProgress />; // Show a loading spinner or fallback UI
  }

  if (!userLoggedIn) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
