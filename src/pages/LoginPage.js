import { React, useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function updateInputFields(data) {
    setEmail(data.email);
    setPassword(data.password);
  }

  function userLogin() {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
      }
    );
  }

  return (
    <>
      <form action={updateInputFields}>
        <input name="email" />
        <input name="password" />
        <button onClick={userLogin} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
