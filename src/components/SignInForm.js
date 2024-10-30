import { useState, useContext, React } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { AuthContext } from "../components/AuthProvider";

const SignInForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setIsLoggedIn } = useContext(AuthContext);
  const userLogin = async (e) => {
    e.preventDefault();
    try {
      await setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in failed:", errorCode, errorMessage);
    }
  };
  return (
    <form>
      <input name="email" onChange={(e) => setEmail(e.target.value)} required />
      <input
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={userLogin} type="submit">
        Login
      </button>
    </form>
  );
};

export default SignInForm;
