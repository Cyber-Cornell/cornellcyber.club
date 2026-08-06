import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import FlashingChar from "./FlashingChar";
import TargetCursor from "./TargetCursor";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { path: string; label: string; disabled?: boolean }[] = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/join", label: "join", disabled: true },
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
          {navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.path}
                className="nav-link nav-link-disabled cursor-target"
                title="applications closed"
              >
                [{item.label}]
              </span>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link cursor-target ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                [{item.label}]
              </Link>
            )
          )}

          <a
            href="https://blogs.cornellcyber.club/"
            className="nav-link cursor-target"
            onClick={() => setIsMenuOpen(false)}
          >
            [education]
          </a>
        </div>
      </div>
      {/* snappy target cursor for navbar items */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={0.8}
        hideDefaultCursor={true}
        parentSelector=".navbar"
        hoverDuration={0.06}
        parallaxOn={false}
      />
    </nav>
  );
};

export default Navbar;
