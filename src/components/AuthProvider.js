import React, { createContext, useState, useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  // checks if user is logged in
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        navigate("/home");
        setUserEmail(user.email);
      } else {
        setIsLoggedIn(false);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
