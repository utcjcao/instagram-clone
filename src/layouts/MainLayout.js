import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const MainLayout = () => {
  const path = useLocation();
  const [user, loading] = useAuthState();
  const isPageLoading = loading && !user;
  if (isPageLoading) return <>loading</>;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
