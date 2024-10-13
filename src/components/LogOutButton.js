import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const LogOutButton = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("logout fail");
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOutButton;
