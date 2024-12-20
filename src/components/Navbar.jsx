import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/";

  // Handle scroll event to check if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // If user scrolls down 50px, change state
      } else {
        setIsScrolled(false); // Otherwise, keep the initial state
      }
    };

    // Add the scroll event listener only on the home page
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]); // Rerun effect when isHomePage changes

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 mx-auto rounded-lg shadow-lg transition-colors duration-500 ${
        isHomePage
          ? isScrolled
            ? "bg-[#3A6D8C] shadow-xl" // Solid color after scrolling on home page
            : "bg-transparent" // Transparent on home page until scroll
          : "bg-[#3A6D8C] shadow-xl" // Solid color on other pages
      } ${
        isHomePage && !isScrolled
          ? "md:bg-transparent bg-transparent md:shadow-none" // 100% transparent on small screens when not scrolled
          : "bg-[#3A6D8C]" // Solid color otherwise
      }`}
      aria-label="Main navigation"
      style={{
        backdropFilter: isHomePage && !isScrolled ? "none" : "blur(10px)", // Remove blur when fully transparent
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="Church Logo"
            className="h-10 w-auto mr-2 rounded-full"
          />
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#3A6D8C] text-white flex flex-col items-center space-y-4 p-4 md:hidden z-50">
            <NavbarItems
              currentPath={location.pathname}
              onClick={toggleMenu} // Close menu after click on mobile
            />
          </ul>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-white" role="menu">
          <NavbarItems currentPath={location.pathname} />
        </ul>
      </div>
    </nav>
  );
};

// Navbar items component
const NavbarItems = ({ currentPath, onClick }) => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Leadership", path: "/leadership" },
    { name: "Ministries", path: "/ministries" },
    { name: "Media", path: "/media" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <li key={item.path} role="none">
          <a
            href={item.path}
            role="menuitem"
            onClick={onClick} // Optional onClick for mobile menu
            className={`px-3 py-2 rounded-md text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors ${
              currentPath === item.path
                ? "bg-white text-[#3A6D8C]" // Active page styling
                : "hover:text-red-500"
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default Navbar;
