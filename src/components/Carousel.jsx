// import { useState, useEffect } from "react";

// const images = [
//   {
//     src: "src/assets/images/4f30b46e-carousel-header-1024x441.png",
//     description: "Our Mission",
//   },
//   { src: "src/assets/images/img2.png", description: "Our Vision" },
//   { src: "src/assets/images/img3.png", description: "Join Us" },
// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((current) => (current + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-80 bg-gray-300">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-1000 ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={image.src}
//             alt={image.description}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-50 text-white">
//             <h2 className="text-2xl">{image.description}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;

import { useState, useEffect } from "react";

// Dummy data for the carousel slides
const slides = [
  {
    src: "src/assets/images/sof1.jpg",
    alt: "Slide 1",
    transition: "fade",
    title: "Welcome to Gospel Light Mission",
    description: "Join us for worship this and every Sunday.",
  },
  {
    src: "src/assets/images/great.jpg",
    alt: "Slide 2",
    transition: "slide",
    title: "Our Mission",
    description:
      "To maintain the centrality of the Word of God and, through the enablement of the Holy Spirit, pursue a holistic ministry so as to bring all creation to glorify God.",
  },
  {
    src: "src/assets/images/sof3.jpg",
    alt: "Slide 3",
    transition: "zoom",
    title: "Join Our Community",
    description: "Become a part of something bigger.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionType, setTransitionType] = useState(slides[0].transition);

  // Function to move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      setTransitionType(slides[nextIndex].transition); // Change transition based on slide
    }, 5000); // 5-second interval
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Helper function to get the correct transition class based on the type
  const getTransitionClass = (type) => {
    switch (type) {
      case "fade":
        return "transition-opacity duration-1000 opacity-0";
      case "slide":
        return "transition-transform duration-1000 transform translate-x-full";
      case "zoom":
        return "transition-transform duration-1000 transform scale-90";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-72 md:h-86 lg:h-[540px] overflow-hidden">
      {" "}
      {/* Adjusted heights */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === currentIndex
              ? "opacity-100"
              : getTransitionClass(transitionType)
          } transition-all duration-1000`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover" // Ensure the image covers the container without distortion
          />
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-50 text-white">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl">{slide.description}</p>
          </div>
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-red-500" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>
      {/* Manual Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-2 py-1 rounded-full hover:bg-red-500"
      >
        Prev
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-2 py-1 rounded-full hover:bg-red-500"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
