import React, { useState, useEffect } from "react";
import {
  Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";

const App = () => {
  const [authUser] = useAuthState(auth);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/auth"}></Navigate>}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to={"/"}></Navigate>}
        />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
