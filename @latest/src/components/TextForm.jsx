import React, { useState } from "react";

const TextForm = ({ heading, mode }) => {
  const [text, setText] = useState("");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleUpclick = () => {
    setText(text.toUpperCase());
  };

  const handleLowclick = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalizeClick = () => {
    setText(
      text
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    );
  };

  const handleReverseClick = () => {
    setText(text.split("").reverse().join(""));
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleSpeakClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleClean = () => {
    setText("");
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div
        className={`shadow-xl rounded-2xl p-8 w-full max-w-2xl ${
          mode === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
        }`}
      >
        <h1
          className={`text-3xl font-bold text-center mb-6 ${
            mode === "light" ? "text-blue-600" : "text-yellow-400"
          }`}
        >
          {heading}
        </h1>

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

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={handleUpclick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 cursor-pointer"
          >
            Uppercase
          </button>

          <button
            onClick={handleLowclick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 cursor-pointer"
          >
            Lowercase
          </button>

          <button
            onClick={handleCapitalizeClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition duration-300  cursor-pointer"
          >
            Capitalize
          </button>
          <button
            onClick={handleReverseClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition duration-300  cursor-pointer"
          >
            Reverse Text
          </button>
          <button
            onClick={handleSpeakClick}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl transition duration-300  cursor-pointer"
          >
            Speak Text
          </button>
          <button
            onClick={handleClean}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition duration-300  cursor-pointer"
          >
            Clean Text
          </button>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Text Summary</h2>
          <p>
            {wordCount} words and {text.length} characters
          </p>
          <p>{(0.008 * wordCount).toFixed(2)} minutes read</p>

          <h2 className="font-semibold mt-4 mb-2">Preview</h2>
          <p className="wrap-break-word">
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
