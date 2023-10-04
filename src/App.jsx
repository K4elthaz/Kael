import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/home/home";
import LandingPage from "./components/home/landingPage";
import Navigation from "./components/Navigations/nav";
import Stack from "./components/home/techStack";

function App() {
  return (
    <main
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
