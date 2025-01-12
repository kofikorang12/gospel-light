// import React from "react";

const events = [
  {
    title: "14 DAYS PRAYER & FASTING",
    date: "January 13, 2025",
    description:
      "Join us for 14 days of fasting and prayer starting January 13th. Seek God’s guidance, strengthen your faith, and grow spiritually together as a church community..",
  },
  {
    title: "EASTER GAMES",
    date: "April 19, 2025",
    description:
      "Get ready for an exciting Easter Games event for the entire church family! Join us on April 19, 2025, for a day filled with fun, fellowship, and celebration. Don’t miss this joyful gathering of faith and community!",
  },
  {
    title: "EASTER SUNDAY SERVICE",
    date: "April 20, 2025",
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
