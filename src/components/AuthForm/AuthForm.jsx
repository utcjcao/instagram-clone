import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <div>{isLogin ? <Login /> : <SignUp />}</div>;
};

export default AuthForm;
