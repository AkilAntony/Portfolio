import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  console.log(navColor);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor("#191919");
    } else {
      setNavColor("transparent");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className="navbar"
      onScroll={changeNavbarColor}
      style={{ backgroundColor: navColor }}
    >
      <div className="logo">Akil AL</div>

      <div className={`menu ${isOpen ? "open" : ""}`} id="navlink">
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          className="navLink"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={toggleMenu}
          className="navLink"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          className="navLink"
        >
          Contact
        </Link>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Header;
