// import React from "react";

const MinistryCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default MinistryCard;
