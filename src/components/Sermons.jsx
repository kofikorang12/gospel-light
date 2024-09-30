

import React, { useState } from "react";

const Sermons = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  // Function to handle when the iframe is fully loaded
  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false once the iframe has loaded
  };

  return (
    <div className="w-full md:w-full p-4 relative">
      <h2 className="text-3xl font-bold mb-4">Sermons</h2>

      {/* Loading Spinner and Message */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-64">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="text-lg font-semibold text-gray-500">Loading...</p>
        </div>
      )}

      {/* Iframe Content */}
      <div className="relative pb-[75%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/example"
          title="YouTube Sermon"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={handleIframeLoad} // Event to detect when iframe is fully loaded
        ></iframe>
      </div>
    </div>
  );
};

export default Sermons;
