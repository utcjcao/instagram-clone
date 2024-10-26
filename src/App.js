import React, { useState, useEffect } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

import AnonymousLayout from "./layouts/AnonymousLayout";
import MainLayout from "./layouts/MainLayout";

import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./Routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<AnonymousLayout />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
