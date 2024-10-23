import { React, useState, useContext, useRef } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const userSignUp = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      setError("password too short");
    } else {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          navigate("/home");
        }
      );
    }
  };

  return (
    <>
      <form>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          required
        />
        <button onClick={userSignUp} type="submit">
          Sign Up
        </button>
        <div>{error}</div>
      </form>
    </>
  );
};

export default SignUpForm;
