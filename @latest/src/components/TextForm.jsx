import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light"); 

  const handleOnchange = (e) => {
    setText(e.target.value);
  };
    const handleCapitalizeClick = () =>
    setText(text.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    );

  const handleUpclick = () => {
    setText(text.toUpperCase());
  };

  const handleLowclick = () => {
    setText(text.toLowerCase());
  };

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${
        mode === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`shadow-xl rounded-2xl p-8 w-full max-w-2xl ${
          mode === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
        }`}
      >
        {/* Heading */}
        <h1
          className={`text-3xl font-bold text-center mb-6 ${
            mode === "light" ? "text-blue-600" : "text-yellow-400"
          }`}
        >
          {props.heading}
        </h1>

        {/* Dark/Light Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleMode}
            className={`px-4 py-2 rounded-xl border ${
              mode === "light"
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            } transition duration-300`}
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>

        {/* Textarea Section */}
        <div className="mb-6">
          <textarea
            value={text}
            onChange={handleOnchange}
            rows="6"
            className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-2 ${
              mode === "light"
                ? "border-gray-300 focus:ring-blue-500 bg-white text-gray-900"
                : "border-gray-600 focus:ring-yellow-400 bg-gray-700 text-white"
            }`}
            placeholder="Enter your text here..."
          ></textarea>

          <div className="mt-4">
            <h2 className="font-semibold mb-1">Your Text Summary</h2>
            <p>
              {text === "" ? 0 : text.split(" ").length} words and {text.length} characters
            </p>
            <p>{(0.008 * text.length).toFixed(2)} minutes read</p>

            <h2 className="font-semibold mt-4 mb-1">Preview</h2>
            <p>{text}</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpclick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300"
            >
              Convert to Uppercase
            </button>
            <button
              onClick={handleLowclick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300"
            >
              Convert to Lowercase
            </button>
            <button
              onClick={handleCapitalizeClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition duration-300"
            >
              Capitalize Words
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextForm;