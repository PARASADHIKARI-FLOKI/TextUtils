import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowclick = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          {props.heading}
        </h1>

        {/* Textarea Section */}
        <div className="mb-6">
          <textarea
            value={text}
            onChange={handleOnchange}
            name="text"
            id="text"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
          ></textarea>

          <button
            onClick={handleUpclick}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowclick}
            className="mt-4 ml-40 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300"
          >
            Convert to LowerCase
          </button>
        </div>

        {/* Counter Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner text-center">
          <p className="text-xl font-semibold mb-4">
            Count: <span className="text-blue-600">{count}</span>
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleIncrease}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              Increase
            </button>

            <button
              onClick={handleDecrease}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Decrease
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TextForm;