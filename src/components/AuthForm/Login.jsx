import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {
  Input,
  InputGroup,
  Spinner,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { loading, error, login } = useLogin();
  return (
    <>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Enter email"
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <Input
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          pr="4.5rem"
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
          colorScheme={"blue"}
          isLoading={loading}
          h="1.75rem"
          size={"sm"}
          onClick={() => login(inputs)}
        >
          {"Login"}
        </Button>
      </InputGroup>
    </>
  );
};

export default Login;
