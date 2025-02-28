import React from "react";
import { FaDownload } from "react-icons/fa";

const CV = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-wide text-center text-shadow-lg">
        My CV
      </h1>

      {/* CV Card Layout */}
      <div className="w-full max-w-4xl h-[700px] border border-gray-300 rounded-xl shadow-xl bg-white overflow-hidden transform transition duration-500 hover:scale-105 ease-in-out">
        <iframe
          src="/CV/me.pdf"
          className="w-full h-full rounded-xl"
          title="My CV"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/CV/me.pdf"
        download="me.pdf"
        className="flex items-center justify-center gap-3 px-8 py-4 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 ease-in-out"
      >
        <FaDownload className="text-xl" />
        <span className="text-lg">Download CV</span>
      </a>
    </div>
  );
};

export default CV;
