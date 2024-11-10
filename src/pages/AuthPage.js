import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img"></Image>
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm></AuthForm>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
