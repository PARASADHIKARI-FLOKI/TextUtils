import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          mode === "light" ? "bg-gray-100" : "bg-gray-900"
        }`}
      >
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text" mode={mode} />}
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;