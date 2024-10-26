import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { auth } from "../Firebase";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  });
};

export default ProtectedRoute;
