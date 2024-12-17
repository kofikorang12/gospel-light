// import React from "react";

const Sidebar = ({ selectedSection, onSelectSection }) => {
  return (
    <div className="w-full md:w-1/4">
      <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-gray-900 p-4">
        <li className="relative">
          <button
            onClick={() => onSelectSection("news")}
            className={`text-lg font-semibold ${
              selectedSection === "news" ? "text-red-700" : "text-blue-900"
            } hover:text-red-700`}
          >
            News Articles
          </button>
          {/* Small Active Box */}
          {selectedSection === "news" && (
            <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full"></div>
          )}
        </li>
        <li className="relative">
          <button
            onClick={() => onSelectSection("sermons")}
            className={`text-lg font-semibold ${
              selectedSection === "sermons" ? "text-red-700" : "text-blue-900"
            } hover:text-red-700`}
          >
            Sermons
          </button>
          {selectedSection === "sermons" && (
            <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full"></div>
          )}
        </li>
        <li className="relative">
          <button
            onClick={() => onSelectSection("gallery")}
            className={`text-lg font-semibold ${
              selectedSection === "gallery" ? "text-red-700" : "text-blue-900"
            } hover:text-red-700`}
          >
            Gallery
          </button>
          {selectedSection === "gallery" && (
            <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full"></div>
          )}
        </li>
        {/* <li className="relative">
          <button
            onClick={() => onSelectSection("events")}
            className={`text-lg font-semibold ${
              selectedSection === "events" ? "text-red-700" : "text-blue-900"
            } hover:text-red-700`}
          >
            Events
          </button>
          {selectedSection === "events" && (
            <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full"></div>
          )}
        </li>
        <li className="relative">
          <button
            onClick={() => onSelectSection("videos")}
            className={`text-lg font-semibold ${
              selectedSection === "videos" ? "text-red-700" : "text-blue-900"
            } hover:text-red-700`}
          >
            Videos
          </button>
          {selectedSection === "videos" && (
            <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-3 h-3 bg-red-700 rounded-full"></div>
          )}
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
