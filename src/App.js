import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImagePage from "./pages/ImagePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/*todo: add home page*/}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/images" element={<ImagePage />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
