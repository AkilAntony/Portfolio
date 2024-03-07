import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import Skills from "../../Skill/Skills";

function About() {
  return (
    <div className="about-section bg-white">
  
      {/* <div className="aboutContainer">
        <div className="about-text">
          <h1>Designer, Front End Developer</h1>
          <p>I help People to interact with Web</p>

          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <button className="btn btn-light">Learn More</button>
          </Link>
        </div>
      </div> */}
      <div className="about-content 
        bg-white flex flex-col-reverse md:flex-row h-[100vh] items-center 
          justify-between md:mr-8 md:ml-8 text-center md:text-left  ml-2 mr-2"  
          id="about">

        <div className="description text-left">
          <p className="text-3xl md:text-5xl font-medium antialiased leading-relaxed mb-3">
            <span className="font-mono">Hello I’am </span>
            <span className="font-extrabold">Akil A L.</span><br />
            <span className="font-extrabold"> Frontend </span>
            <span className="font-mono"> Developer</span><br/>
            <span className="font-mono"> Based In</span>
            <span className="font-extrabold"> India</span></p>
          <p className="text-left ml-3">
            Highly skilled <strong>Software Engineer</strong> with over <strong>1+ years</strong> of experience in <strong>Front-end web development</strong>, specializing in <strong>HTML5, CSS3,</strong> and <strong>JavaScript</strong>. Proficient in creating visually appealing and engaging user interfaces for web applications, with hands-on experience in <strong>ReactJS</strong>.
        </p>
        <div className="socialMedia flex ml-3">
          <a href="https://www.linkedin.com/in/akil-al/">
            <img src="linkedin.png" alt="linkedin"
              className="h-full w-12 hover:scale-110 
                hover:shadow-lg rounded-lg" />
          </a>
          <a href="https://www.facebook.com/akil.al.142/">
            <img src="facebook.png" alt="facebook"  
              className="h-full w-12 hover:scale-110 
                hover:shadow-lg rounded-lg"/>
          </a>
          <a href="https://github.com/AkilAntony">
            <img src="github.png" alt="" 
              className="h-full w-12 hover:scale-110 
                hover:shadow-lg rounded-lg" />
          </a>
          <a href="https://www.instagram.com/mr_ak_i_l/">
            <img src="instagram.png" alt="instagram" 
              className="h-full w-12 hover:scale-110 
                hover:shadow-lg rounded-lg"/>
          </a>
        </div>
        </div>
        <div className="about-image ">
          <img src="profile.jpg" alt="Profile" className='md:h-full ' />
        </div>
      </div>

      {/* Skills */}
      <Skills/>
      
    </div>
  );
}

export default About;
 