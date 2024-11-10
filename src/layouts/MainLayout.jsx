import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, firestore, auth } from "../Firebase";
import SideBar from "../components/SideBar/SideBar";
import { Flex, Spinner, Box } from "@chakra-ui/react";

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size={"xl"}></Spinner>
    </Flex>
  );
};

const MainLayout = () => {
  const path = useLocation();
  const [user, loading] = useAuthState(auth);
  const isPageLoading = loading && !user;
  const loadSideBar = user && path !== "/auth";
  if (isPageLoading) return <PageLayoutSpinner />;
  return (
    <div>
      {loadSideBar ? <SideBar></SideBar> : null}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
