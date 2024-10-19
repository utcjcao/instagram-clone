import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
