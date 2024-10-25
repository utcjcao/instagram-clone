import React, { createContext, useState, useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  // checks if user is logged in
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
