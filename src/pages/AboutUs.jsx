// import React from "react";
import AboutTabs from "../components/AboutTabs";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50">
      {/* {" "} */}
      {/* Added top padding to avoid navbar overlap */}
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl text-red-600 font-bold text-center mb-8">
          About Us
        </h1>
        <AboutTabs />
      </div>
    </div>
  );
};

export default AboutUs;
