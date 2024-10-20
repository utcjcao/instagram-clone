import { React, useState, useContext } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const userSignUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setIsLoggedIn(true);
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

export default SignInForm;
