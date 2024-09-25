import { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
import NewsArticles from "../components/NewsArticles"; // Import NewsArticles
import Sermons from "../components/Sermons"; // Import Sermons
import Gallery from "../components/Gallery"; // Import Gallery

const Media = () => {
  const [selectedSection, setSelectedSection] = useState("news"); // Default section is 'news'

  const renderContent = () => {
    switch (selectedSection) {
      case "news":
        return <NewsArticles />;
      case "sermons":
        return <Sermons />;
      case "gallery":
        return <Gallery />;
      case "events":
        return <div>Events Section Coming Soon!</div>;
      case "videos":
        return <div>Videos Section Coming Soon!</div>;
      default:
        return <NewsArticles />;
    }
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row px-4">
        {/* Sidebar */}
        <Sidebar
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
        />

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-4 mx-auto">
          <h1 className="text-4xl font-bold text-red-600 text-center mb-8">
            Media
          </h1>
          {renderContent()} {/* Render the selected content */}
        </div>
      </div>
    </div>
  );
};

export default Media;
