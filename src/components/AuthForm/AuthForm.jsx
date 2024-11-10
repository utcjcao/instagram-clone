import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4} alignItems={"flex-start"}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram"
          ></Image>
          {isLogin ? <Login></Login> : <SignUp />}
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account? " : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
