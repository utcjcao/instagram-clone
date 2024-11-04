import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { loading, error, login } = useLogin();
  return (
    <form action={() => login(inputs)}>
      <input
        name="email"
        type="email"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <button disabled={loading} type="submit">
        login
      </button>
    </form>
  );
};

export default Login;
