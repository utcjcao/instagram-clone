import { useState, React } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const LoginForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const userLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in failed:", errorCode, errorMessage);
    }
  };
  return (
    <form>
      <input name="email" onChange={(e) => setEmail(e.target.value)} />
      <input name="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={userLogin} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
