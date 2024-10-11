import React, { createContext, useState, useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  // checks if user is logged in
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      //todo here:
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
