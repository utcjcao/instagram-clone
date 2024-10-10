import { React, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function updateInputFields(data) {
    setEmail(data.email);
    setPassword(data.password);
  }

  const userSignUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
      }
    );
  };

  const userSignIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
      }
    );
  };

  return (
    <>
      <form action={updateInputFields}>
        <input name="email" />
        <input name="password" />
        <button onClick={userSignUp} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
