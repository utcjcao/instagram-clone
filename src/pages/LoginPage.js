import { React, useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../components/AuthProvider";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, userEmail } = useContext(AuthContext);

  return <>{isLoggedIn ? <>already logged in</> : <LoginForm></LoginForm>}</>;
};

export default LoginPage;
