import { React, useContext } from "react";
import { AuthProvider, AuthContext } from "../components/AuthProvider";
import { Outlet } from "react-router-dom";
import { auth } from "../Firebase";

const Layout = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      // ...
    } else {
      
    }
  });
  return (
    {user ? <Outlet> : <span>ur not logged in dingus</span>}
  );
};

export default Layout;
