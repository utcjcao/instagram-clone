import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default SideBar;
