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
      setNavColor("#FFFFFF");
    } else {
      setNavColor("transparent");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className="navbar   fixed w-full   shadow-lg "
      onScroll={changeNavbarColor}
      style={{ backgroundColor: navColor }}
    >
      <div className="logo text-black  h-full w-12 md:mx-7  ">
        <img src="logo.png"  target='logo'/>
      </div>
       
      <div className={`menu ${isOpen ? "open" : ""} flex items-center `} id="navlink">
        <Link
          to="about"
          smooth={true}
          duration={100}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          className="navLink "
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={100}
          style={{ cursor: "pointer" }}
          onClick={toggleMenu}
             className="navLink "
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={100}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          className="navLink"
        >
          Contact
        </Link>
        <a
          href="Akil.pdf"
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer" className="navLink"
        >
          <button className="bg-black text-white font-bold py-2 px-3 rounded inline-flex items-center gap-2">
            <span>Resume</span>
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
          </button>
        </a>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Header;
