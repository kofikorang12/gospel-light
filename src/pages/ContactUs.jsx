import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Animation happens only once while scrolling
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the popup when form is submitted
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div
      className="pt-24 pb-12 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("/images/watch night.jpg")', // Full-page background image
      }}
    >
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-bold text-center mb-8 text-red-500"
          data-aos="fade-down" // AOS animation on heading
        >
          Contact Us
        </h1>

        {/* Responsive Layout for Form and Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div
            className="relative bg-white bg-opacity-80 rounded-lg shadow-lg p-8 lg:p-6 lg:py-4"
            data-aos="fade-up" // AOS animation on form
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location and Picture Section */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Location Information */}
            <div
              className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
              data-aos="fade-right" // AOS animation on location
            >
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <p className="text-lg mb-2 font-medium">
                Aboma-Teshie, Behind Presby, Accra-Ghana
              </p>
              <p className="text-lg mb-4 font-medium">
                Phone: +233 (0) 552 310 649
              </p>
              <iframe
                title="Location Map"
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086799376937!2d-122.41941568468026!3d37.77492917975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858158f4794bff%3A0x5e454f9d8e5761e2!2sFaith%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1635952910326!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Picture Section */}
            <div
              className="rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-left" // AOS animation on picture
            >
              <img
                src="/images/great.jpg"
                alt="Church Location"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Form Submission */}
      {isSubmitted && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          Thank you! Your message has been submitted.
        </div>
      )}
    </div>
  );
};

export default ContactPage;
