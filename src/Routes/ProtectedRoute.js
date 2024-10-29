import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  });
  if (loading) {
    return <div>loading</div>;
  }
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
