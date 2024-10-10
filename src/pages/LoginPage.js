import { React, useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function updateInputFields(data) {
    setEmail(data.email);
    setPassword(data.password);
  }

  const userLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      }
    );
  };

  return (
    <>
      <form>
        <input name="email" onChange={(e) => setEmail(e.target.value)} />
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={userLogin} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
