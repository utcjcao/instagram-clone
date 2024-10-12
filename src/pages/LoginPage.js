import { React, useState, useContext } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const userLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in failed:", errorCode, errorMessage);
    }
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
