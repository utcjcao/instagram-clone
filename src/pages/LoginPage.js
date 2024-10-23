import { React, useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../components/AuthProvider";
import LogOutButton from "../components/LogOutButton";
import SignInForm from "../components/SignUpForm";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, userEmail } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <LogOutButton></LogOutButton>
      ) : (
        <div>
          sign in here: <SignInForm></SignInForm>
          or make a new account. bing bong
          <LoginForm></LoginForm>
        </div>
      )}
    </>
  );
};

export default LoginPage;
