import React, { useState, useEffect } from "react";
import { AuthProvider, AuthContext } from "./components/AuthProvider";
import { Router, Routes, Route } from "react-router-dom";
import AnonymousLayout from "./layouts/AnonymousLayout"
import MainLayout from "./layouts/MainLayout"
import FeedPage from "./pages/FeedPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProfilePage from "./pages/ProfilePage"
import SignUpPage from "./pages/SignUpPage"


const App = () => {
  return (<AuthProvider>
    <Router>
      <Routes>
    <Route element ={AnonymousLayout}>
      <Route path="/" element ={}></Route>
    </Route>
    <Route element ={MainLayout}>
      
    </Route>
      </Routes>
    </Router>
  </AuthProvider>);
};

export default App;
