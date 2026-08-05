import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MatrixRain from "./components/Matrix";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
//import Events from "./pages/Events";;
import Sponsorship from "./pages/Sponsorship.tsx";
import "./App.css";
import Footer from "./components/Footer.tsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* global matrix rain background — fixed full-viewport, behind all content */}
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <MatrixRain fontSize={24} speed={0.3} fpsCap={60} />
        </div>
        <Navbar />
        {/* make main full width so content can stretch edge-to-edge */}
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* applications are closed for now — /join is inaccessible */}
            <Route path="/join" element={<Navigate to="/" replace />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        </main>
        <div className="relative z-10">
          <Footer darkBackground />
        </div>
      </div>
      {/*div>
        <hr className="border-t border-[#FF3B3B] my-4"/>
        <div className="flex gap-5 justify-center mt-10">
          <img src="" alt="image here" className="w-[80px] h-[80px] ml-20 mr-20"/>
          <div className="w-[500px] h-[200px] p-[10px]">
            <p className="text-[#FF3B3B] text-lg"> Connect </p>
            <p className="text-white"> Stay connected with the latest Cyber@Cornell news and events</p>
            <div className="flex gap-10 mt-4">
              <img src="disc_logo.png" alt="Discord" className="w-[50px] h-[80px]"/>
              <img src="instafin_logo.png" alt="Instagram" className="w-[50px] h-[80px]"/>
              <img src="link_logo2.png" alt="LinkedIn" className="w-[50px] h-[80px]"/>
            </div>
          </div>
          <div className="w-[500px] h-[200px] p-[10px] ml-10">
            <p className="text-[#FF3B3B] text-lg"> Join </p>
            <Link to="/join">
              <p className="text-white underline"> New member intake</p>
            </Link>
          </div>
          <div className="w-[500px] h-[200px] p-[10px]">
            <p className="text-[#FF3B3B] text-lg"> Contact </p>
            <Link to="/contact">
            <p className="text-white underline"> Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white text-center">© 2025. All rights reserved.</p>
          <p className="text-white text-center">This organization is a registered student organization of Cornell University.</p>
          <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment" target="_blank" className="text-white text-center underline"> Equal Education and Employment</a>
        </div>
      </div>*/}
    </Router>
  );
}

export default App;
