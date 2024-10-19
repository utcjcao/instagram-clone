import { React, useContext } from "react";
import { AuthProvider, AuthContext } from "../components/AuthProvider";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>ur not logged in dingus</div>;
};

export default Layout;
