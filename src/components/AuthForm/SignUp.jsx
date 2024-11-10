import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signUp } = useSignUp();
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
        fontSize={14}
        size={"sm"}
        value={inputs.email}
        type="name"
        placeholder="Enter full name"
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <Input
        fontSize={14}
        size={"sm"}
        value={inputs.email}
        type="username"
        placeholder="Enter username"
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <InputGroup>
        <Input
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          fontSize={14}
          size={"sm"}
          value={inputs.password}
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement h={"full"}>
          <Button
            variant="ghost"
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        isLoading={loading}
        fontSize={14}
        size={"sm"}
        onClick={() => signUp(inputs)}
      >
        {"Sign Up"}
      </Button>
    </>
  );
};

export default SignUp;
