import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutBox = ({ title, content, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Reveal when 20% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className={`p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <div
          className={`transition-all duration-500 ${
            isHovered ? "block" : "hidden"
          }`}
        >
          {content}
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
