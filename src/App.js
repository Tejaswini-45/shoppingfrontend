import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import CustomizationPage from "./pages/CustomizationPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customize" element={<CustomizationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
