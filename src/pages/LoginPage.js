import { React, useState, useContext } from "react";
import SignUpForm from "../components/SignUpForm";
import { AuthContext } from "../components/AuthProvider";
import LogOutButton from "../components/LogOutButton";
import SignInForm from "../components/SignInForm";

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
          <SignUpForm></SignUpForm>
        </div>
      )}
    </>
  );
};

export default LoginPage;
