import React from "react";

const About = ({ mode }) => {
  return (
    <div
      className={`p-8 ${
        mode === "light" ? "text-black" : "text-white"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>
        This is a text utility app built using React and Tailwind CSS.
      </p>
    </div>
  );
};

export default About;