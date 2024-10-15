import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider, AuthContext } from "./components/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <section>
            <Routes>
              <Route path="/home" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/images" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </section>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
