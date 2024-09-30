// import React from "react";

const events = [
  {
    title: "Christmas Carol",
    date: "December 21, 2024",
    description: "Join us for a special evening of carols and celebration.",
  },
  {
    title: "Watch Night Service",
    date: "December 31, 2024",
    description: "Welcome the new year with worship and fellowship.",
  },
  {
    title: "Easter Celebration",
    date: "April 17, 2025",
    description: "Celebrate the resurrection of Jesus with us.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
          data-aos="flip-up" // Adding AOS effect for individual cards
        >
          <h3 className="text-xl font-bold text-red-500 mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.date}</p>
          <p className="mt-2 font-medium">{event.description}</p>
        </div>
      ))}
      <div className="flex justify-center w-full mt-6">
        <a
          href="/media#events"
          className="bg-[#001F3F] text-white px-6 py-2 rounded-lg hover:bg-[#3A6D8C] transition"
        >
          See All Events
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
