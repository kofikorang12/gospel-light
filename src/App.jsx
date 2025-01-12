// import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Ministries from "./pages/Ministries";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// Ensure all links in the Navbar component use hash-based routing
// Example: <Link to="/about">About Us</Link> should be <Link to="#/about">About Us</Link>

// Update the Navbar component to use hash-based links
// Example:
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="#/">Home</Link></li>
//         <li><Link to="#/about">About Us</Link></li>
//         <li><Link to="#/leadership">Leadership</Link></li>
//         <li><Link to="#/ministries">Ministries</Link></li>
//         <li><Link to="#/media">Media</Link></li>
//         <li><Link to="#/contact">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// }
