import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        mode === "light"
          ? "bg-blue-500 text-white"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex gap-6 items-center">
        <h1 className="font-bold text-xl">TextUtils</h1>

        <Link to="/" className="hover:underline">
          Home
        </Link>

        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>

      {/* Toggle Button with Icon */}
      <button
        onClick={toggleMode}
        className="flex items-center gap-2 px-4 py-2 rounded cursor-pointer text-2xl hover:scale-105 transition "
      >
        {mode === "light" ? (
          <>
            <FaMoon /> 
          </>
        ) : (
          <>
            <FaSun className="text-yellow-300" /> 
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;