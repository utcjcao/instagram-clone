import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, firestore, auth } from "../Firebase";
import SideBar from "../components/SideBar/SideBar";
import ToastProvider from "../components/ToastContext";

const MainLayout = () => {
  const path = useLocation();
  const [user, loading] = useAuthState(auth);
  const isPageLoading = loading && !user;
  const loadSideBar = user && path !== "/login";
  if (isPageLoading) return <>loading</>;
  return (
    <div>
      <ToastProvider>
        {loadSideBar ? <SideBar></SideBar> : null}
        <Outlet />
      </ToastProvider>
    </div>
  );
};

export default MainLayout;
