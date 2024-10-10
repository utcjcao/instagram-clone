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
  const navigate = useNavigate();

  const userSignUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        navigate("/login");
      }
    );
  };

  return (
    <>
      <form>
        <input name="email" onChange={(e) => setEmail(e.target.value)} />
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={userSignUp} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
