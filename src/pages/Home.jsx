import React from "react";
import Carousel from "../components/Carousel";
import GeneralOverseerMessage from "../components/GeneralOverseerMessage";
import NewsArticles from "../components/NewsArticles";
import ChurchActivities from "../components/ChurchActivities";
import UpcomingEvents from "../components/UpcomingEvents";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for AOS effects
      easing: "ease-in-out", // Smooth transition
      once: true, // Animation only once
    });
  }, []);

  return (
    <div>
      {/* Carousel Section */}
      <Carousel />

      {/* General Overseer Message Section */}
      <section
        className="py-12 bg-radient-to-r from-[#EAD8B1] to-[#6A9AB0]"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#3A6D8C]">
            General Overseer
          </h2>
          <GeneralOverseerMessage />
        </div>
        {/* Styled Dots */}
        <div className="flex justify-center mt-4">
          <div className="h-2 w-2 rounded-full bg-gray-500 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-500 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-500 mx-1"></div>
        </div>
      </section>

      {/* Church Activities Section */}
      <section
        className="py-12 bg-gradient-to-r from-[#6A9AB0] to-[#001F3F] text-white"
        data-aos="fade-left"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#EAD8B1]">
            Church Activities
          </h2>
          <ChurchActivities />
        </div>
        {/* Styled Dots */}
        <div className="flex justify-center mt-4">
          <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section
        className="py-12 bg-radient-to-r from-[#001F3F] to-[#EAD8B1]"
        data-aos="fade-right"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#6A9AB0]">
            Upcoming Events
          </h2>
          <UpcomingEvents />
        </div>
        {/* Styled Dots */}
        <div className="flex justify-center mt-4">
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
        </div>
      </section>

      {/* Latest News Section */}
      <section
        className="py-12 bg-gradient-to-r from-[#EAD8B1] to-[#3A6D8C]"
        data-aos="fade-down"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#001F3F]">
            Latest News
          </h2>
          <NewsArticles />
        </div>
        {/* Styled Dots */}
        <div className="flex justify-center mt-4">
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
