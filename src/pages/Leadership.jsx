// const leaders = [
//   {
//     name: "John Doe",
//     role: "General Council",
//     img: "src/assets/images/img2.png",
//   },
//   { name: "Jane Doe", role: "Executives", img: "/leader2.jpg" },
//   { name: "Jane Doe", role: "Executives", img: "/leader2.jpg" },
//   { name: "Jane Doe", role: "Executives", img: "/leader2.jpg" },
//   // Add more leaders
// ];

// const Leadership = () => {
//   return (
//     <div className="pt-24 pb-12">
//       {" "}
//       {/* Added top padding to prevent overlap with navbar */}
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Leadership</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
//           {leaders.map((leader, idx) => (
//             <div
//               key={idx}
//               className="flex items-center space-x-4 p-10 bg-white shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl hover:animate-bounce-100"
//             >
//               <img
//                 src={leader.img}
//                 alt={leader.name}
//                 className="w-32 h-32 rounded-full"
//               />
//               <div>
//                 <h2 className="text-xl font-bold">{leader.name}</h2>
//                 <p>{leader.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leadership;

import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS CSS

const leaders = [
  {
    name: "John Doe",
    role: "General Overseer",
    img: "src/assets/images/sofo.jpg",
  },
  { name: "Jane Doe", role: "Executives", img: "src/assets/images/img3.png" },
  { name: "Jane Doe", role: "Executives", img: "/leader2.jpg" },
  { name: "Jane Doe", role: "Executives", img: "/leader2.jpg" },
  // Add more leaders as needed
];

const Leadership = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Smooth animation transition
      once: true, // Only animate once when the card is in view
    });
  }, []);

  return (
    <div className="pt-24 pb-12">
      {/* Added top padding to prevent overlap with navbar */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-red-600 font-bold text-center mb-8">
          Leadership
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              data-aos={getAosEffect(idx)} // Apply different AOS effects
              className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl"
            >
              <img
                src={leader.img}
                alt={leader.name}
                loading="lazy" // Lazy loading for better performance
                className="w-32 h-32 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{leader.name}</h2>
                <p>{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to return different AOS effects based on the index
const getAosEffect = (index) => {
  const effects = [
    "fade-up",
    "fade-down",
    "fade-right",
    "fade-left",
    "zoom-in",
    "flip-left",
  ];
  return effects[index % effects.length]; // Cycle through the effects
};

export default Leadership;
