import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImagePage from "./pages/ImagePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/images" element={<ImagePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
