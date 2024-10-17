import React, { useState, useEffect } from "react";
import { AuthProvider, AuthContext } from "./components/AuthProvider";
import { Routes } from "./routes/index.js";

const App = () => {
  return <Routes isAuthorized={true} />;
};

export default App;
