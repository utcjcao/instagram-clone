import { React, useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../components/AuthProvider";
import LogOutButton from "../components/LogOutButton";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, userEmail } = useContext(AuthContext);

  return (
    <>{isLoggedIn ? <LogOutButton></LogOutButton> : <LoginForm></LoginForm>}</>
  );
};

export default LoginPage;
