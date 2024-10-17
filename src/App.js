import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/AnonymousLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider, AuthContext } from "./components/AuthProvider";
import { Routes } from "./routes";

const App = () => {
  return <Routes isAuthorized={true} />;
};

export default App;
