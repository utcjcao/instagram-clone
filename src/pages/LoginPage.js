import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm/AuthForm";

const LoginPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <VStack spacing={4} align={"stretch"}>
            <Box textAlign={"center"}>HELLO</Box>
            <AuthForm />
            <Flex gap={5} justifyContent={"center"}></Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default LoginPage;
