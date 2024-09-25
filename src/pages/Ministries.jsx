import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import the AOS CSS
import MinistryCard from "../components/MinistryCard"; // Import the reusable MinistryCard component

const ministries = [
  {
    title: "Children Ministry",
    description:
      "We focus on building the foundation of faith for children. lished fact that a  like",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Youth Ministry",
    description: "Our youth ministry is aimed at guiding the next generation.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Junior Youth Ministry",
    description: "Helping young teens find their purpose in faith.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Women Ministry",
    description: "Empowering women through community and service.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Men’s Ministry",
    description: "Encouraging men to be leaders in faith and family.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Evangelism Ministry",
    description: "Spreading the gospel through outreach and service.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Church Choir",
    description: "Spreading the gospel through outreach and service.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Media",
    description: "Spreading the gospel through outreach and service.",
    img: "src/assets/images/img5.jpg",
  },
  {
    title: "Band stand",
    description: "Spreading the gospel through outreach and service.",
    img: "src/assets/images/img5.jpg",
  },
];

const Ministries = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth transition
      once: true, // Trigger animation only once when the card comes into view
    });
  }, []);

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      {/* Padding added to prevent content from overlapping the navbar */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
          Ministries
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, idx) => (
            <div
              key={idx}
              data-aos={getAosEffect(idx)} // Apply different AOS effects
            >
              <MinistryCard
                img={ministry.img}
                title={ministry.title}
                description={ministry.description}
              />
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
    "flip-left",
    "zoom-in",
  ];
  return effects[index % effects.length]; // Cycle through the effects
};

export default Ministries;
