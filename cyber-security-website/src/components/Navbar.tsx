import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import FlashingChar from "./FlashingChar";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { path: string; label: string; featured?: boolean }[] = [
    { path: "/join", label: "join — apps open", featured: true },
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/team", label: "team" },
    { path: "/contact", label: "contact" },
    { path: "/sponsorship", label: "sponsorship" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <p className="navbar-brand">
          cornellcyber{location.pathname}
          <FlashingChar character="_" />
        </p>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="navbar-menu"
          className={`navbar-links ${isMenuOpen ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${item.featured ? "nav-link-featured" : ""} ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              [{item.label}]
            </Link>
          ))}

          <a
            href="https://blogs.cornellcyber.club/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            [blogs]
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
