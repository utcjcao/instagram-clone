import { React, useContext } from "react";
import { AuthProvider, AuthContext } from "../components/AuthProvider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <span>ur not logged in dingus</span>
      <Outlet />
    </div>
  );
};

export default Layout;
