import React from "react";

const About = ({ mode }) => {
  return (
    <div className="flex items-center justify-center p-6 min-h-screen">
      <div
        className={`shadow-xl rounded-2xl p-8 w-full max-w-3xl ${
          mode === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
        }`}
      >
        {/* Heading */}
        <h1
          className={`text-4xl font-bold text-center mb-6 ${
            mode === "light" ? "text-blue-600" : "text-yellow-400"
          }`}
        >
          About Us
        </h1>

        {/* Intro */}
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to our <span className="font-semibold">Text Utility App</span>.
          This tool is designed to help you easily manipulate and analyze text in
          real-time. Whether you're a student, developer, or writer, our app
          makes text operations simple and fast.
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🚀 Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Convert text to Uppercase and Lowercase</li>
          <li>Capitalize each word instantly</li>
          <li>Reverse text with one click</li>
          <li>Text-to-Speech functionality</li>
          <li>Clean and reset text</li>
          <li>Real-time word and character count</li>
          <li>Estimated reading time</li>
        </ul>

        {/* Mission */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🎯 Our Mission</h2>
        <p className="leading-relaxed">
          Our mission is to provide a simple, fast, and efficient tool for text
          editing. We aim to improve productivity by offering useful features in
          a clean and user-friendly interface.
        </p>

        {/* Tech */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">💻 Built With</h2>
        <p className="leading-relaxed">
          This application is built using modern technologies like React.js,
          Tailwind CSS, and JavaScript to ensure performance and a great user
          experience.
        </p>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm opacity-80">
          <p>🚀 We are continuously improving this app. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default About;