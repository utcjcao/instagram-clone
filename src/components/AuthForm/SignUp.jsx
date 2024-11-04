import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const { loading, error, SignIn } = useSignUp();
  return (
    <form action={() => SignIn(inputs)}>
      <input
        name="email"
        type="email"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        type="Username"
        name="Username"
        onChange={(e) => setInputs({ ...inputs, Username: e.target.value })}
      />
      <input
        name="fullName"
        type="fullName"
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <button disabled={loading} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
