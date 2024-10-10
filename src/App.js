import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImagePage from "./pages/ImagePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <section>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/images" element={<ImagePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
