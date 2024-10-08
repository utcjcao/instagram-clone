import { React, useState } from "react";
import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then((userCredential.user) => {
    const user = userCredential.user;
  }) ;
  return <div>LoginPage</div>;
};

export default LoginPage;
