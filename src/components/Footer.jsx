// import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Icons
import { FiX } from "react-icons/fi"; // Icon for X (formerly Twitter)
// import Media from "../pages/Media.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <footer
      className="bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] text-white pt-10 pb-8"
      style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t-2 border-gray-300 pt-10">
          {/* Section 1: Logo and Slogan */}
          <div className="flex flex-col space-y-4 items-center">
            <img
              src="/images/logo1.png"
              alt="Church Logo"
              className="w-24 h-auto"
            />
            <p className="text-lg text-center text-red-500 font-medium">
              Let your light shine before men
            </p>
          </div>

          {/* Vertical Red Line (Divider) */}
          <div className="hidden md:block w-1 bg-red-500 mx-auto"></div>

          {/* Section 2: Useful Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-bold text-red-500">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/Media" className="hover:text-red-500 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/Media" className="hover:text-red-500 transition">
                  Church Activities
                </a>
              </li>
              <li>
                <a href="/Media" className="hover:text-red-500 transition">
                  Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Red Line (Divider) */}
          <div className="hidden md:block w-1 bg-red-500 mx-auto"></div>

          {/* Section 3: Social Media and Subscribe */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-bold text-red-500">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com"
                className="hover:text-red-500 transition"
              >
                <div className="rounded-full border-2 border-white p-2">
                  <FaFacebookF size={20} />
                </div>
              </a>
              <a
                href="https://x.com/glm_teshie"
                className="hover:text-red-500 transition"
              >
                <div className="rounded-full border-2 border-white p-2">
                  <FiX size={20} />
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-red-500 transition"
              >
                <div className="rounded-full border-2 border-white p-2">
                  <FaInstagram size={20} />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/gospellightmission_"
                className="hover:text-red-500 transition"
              >
                <div className="rounded-full border-2 border-white p-2">
                  <FaTiktok size={20} />
                </div>
              </a>
              <a
                href="https://www.youtube.com/gospellightmission"
                className="hover:text-red-500 transition"
              >
                <div className="rounded-full border-2 border-white p-2">
                  <FaYoutube size={20} />
                </div>
              </a>
            </div>

            <form className="flex flex-col space-y-2 mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg text-gray-700"
              />
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>

          {/* Vertical Red Line (Divider) */}
          <div className="hidden md:block w-1 bg-red-500 mx-auto"></div>

          {/* Section 4: Location and Map */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-bold text-red-500">Location</h3>
            <p>Aboma-Teshie, Greater Accra</p>
            <p>Phone: (+233) 456-7890</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="150"
              loading="lazy"
              className="rounded-lg"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-white border-t-2 border-gray-200 pt-4">
          <p className="font-bold">
            {" "}
            All rights reserved <br /> &copy; {currentYear} Gospel Light Mission{" "}
            <br />
            Website created by{" "}
            <a href="http://www.bareytechnology.com" className="text-red-500">
              Barey Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
