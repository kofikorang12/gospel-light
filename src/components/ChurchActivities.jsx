// import React from "react";

const activities = [
  { day: "Monday", activity: "Youth Meeting", time: "6:30 PM - 7:30 PM" },
  {
    day: "Tuesday",
    activity: "Choir practice",
    time: "7:00 PM - 9:00 PM",
  },
  { day: "Wednesday", activity: "Mid Week Service", time: "6:00 PM - 8:30 PM" },
  {
    day: "Thursday",
    activity: "Band Stand Practice",
    time: "7:00 PM - 8:30 PM",
  },
  { day: "Friday", activity: "Choir Practice", time: "7:00 PM - 8:30 PM" },
  {
    day: "Saturday",
    activity: "Band Stand Practice",
    time: "7:00 PM - 8:30 PM",
  },
  { day: "Sunday", activity: "Worship Service", time: "9:00 AM - 11:30 AM" },
];

const ChurchActivities = () => {
  return (
    <table className="w-full table-auto text-left bg-white text-black rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-[#001F3F] text-white">
        <tr>
          <th className="px-4 py-2">Day</th>
          <th className="px-4 py-2">Activity</th>
          <th className="px-4 py-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, idx) => (
          <tr
            key={idx}
            className={`${
              idx % 2 === 0 ? "bg-[#6A9AB0]" : "bg-[#EAD8B1]"
            } text-black`}
          >
            <td className="border px-4 py-2">{activity.day}</td>
            <td className="border px-4 py-2">{activity.activity}</td>
            <td className="border px-4 py-2">
              {activity.time ? activity.time : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChurchActivities;
