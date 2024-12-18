import { useState } from "react";

// Dummy news articles data
const allNewsArticles = [
  {
    title: "Church Expands Outreach Program",
    content: "Our church has expanded its outreach...",
    img: "/images/img5.jpg",
    date: "Sept 10, 2023",
  },
  {
    title: "Miss Akwaaba Thanksgiving Service",
    content: "A new sermon series has been announced...",
    img: "/images/akw.jpg",
    date: "Jul 18, 2022",
  },
  {
    title: "Annual Youth Conference Held",
    content: "The annual youth conference brought together young minds...",
    img: "/images/img5.jpg",
    date: "Aug 22, 2023",
  },

  {
    title: "New Sermon Series Announced",
    content: "A new sermon series has been announced...",
    img: "/images/img5.jpg",
    date: "Jul 1, 2023",
  },
  // Add more articles here...
];

const NewsArticles = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle archived articles

  // Sort articles by date (latest first)
  const sortedArticles = allNewsArticles
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Split articles into visible and archived
  const visibleArticles = sortedArticles.slice(0, 3); // Show the first 3 recent articles
  const archivedArticles = sortedArticles.slice(3); // Archive the rest

  return (
    <div className="w-full p-4 mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold mb-8 text-center">News </h2>

      {/* Grid Layout for Visible News Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleArticles.map((article, idx) => (
          <div key={idx} className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-red-500">
              {article.title}
            </h3>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <p className="text-sm text-gray-500">{article.date}</p>
          </div>
        ))}
      </div>

      {/* Toggle Archived Articles */}
      {archivedArticles.length > 0 && (
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Hide Archived Articles" : "View More Articles"}
          </button>
        </div>
      )}

      {/* Archived Articles */}
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {archivedArticles.map((article, idx) => (
            <div key={idx} className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-red-500">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4">{article.content}</p>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsArticles;
