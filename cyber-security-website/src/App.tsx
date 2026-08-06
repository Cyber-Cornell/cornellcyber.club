import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MatrixRain from "./components/Matrix";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Sponsorship from "./pages/Sponsorship.tsx";
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
        {/* Site-wide matrix rain — fixed full-viewport, behind all content.
            Do not start this comment with the word "global": ESLint reads
            `/* global ... *\/` as a directive and flags every word in it. */}
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
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
