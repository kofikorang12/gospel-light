// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Ministries from "./pages/Ministries";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/leadership" element={<Leadership />} />
//           <Route path="/ministries" element={<Ministries />} />
//           <Route path="/media" element={<Media />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
