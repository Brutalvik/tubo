import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { CircularProgress } from "@heroui/react";
import Login from "@components/Login/Login";

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <CircularProgress />; // Show a loading spinner or fallback UI
  }

  if (!userLoggedIn) {
    return <Login redirect={true} />; // Redirect to login if not authenticated
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
