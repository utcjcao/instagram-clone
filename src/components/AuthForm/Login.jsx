import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {
  Input,
  Button,
  Alert,
  AlertIcon,
  InputRightElement,
} from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        fontSize={14}
        size={"sm"}
        value={inputs.email}
        type="email"
        placeholder="Enter email"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        fontSize={14}
        size={"sm"}
        value={inputs.password}
        type={"password"}
        placeholder="Enter password"
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
