import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        mode === "light"
          ? "bg-blue-600 text-white"
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

      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded bg-white text-black"
      >
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;