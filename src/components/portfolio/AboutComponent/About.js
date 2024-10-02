 import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import Skills from "../Skill/Skills";

function About() {
  return (
    <div className="about-section bg-white h-[100vh]">
  
      <div className="about-content 
        bg-white flex items-center justify-center md:mx-10 
        flex-wrap-reverse lg:flex-nowrap mx-4 mt-20 md-my-0"  
          id="about">

        <div className="description text-left mx-4">
          <p className="text-3xl md:text-5xl font-medium antialiased leading-relaxed mb-3">
            <span className="font-mono">Hello I’am </span>
            <span className="font-extrabold">Akil A L.</span><br />
            <span className="font-extrabold"> Frontend </span>
            <span className="font-mono"> Developer</span><br/>
            <span className="font-mono"> Based In</span>
            <span className="font-extrabold"> India</span>
          </p>
          <p className="text-left ml-3">
            Highly skilled <strong>Software Engineer </strong> 
            with over <strong>1+ years</strong> of experience in 
            <strong> Front-end web development</strong>, specializing in 
            <strong> HTML5, CSS3,</strong> and <strong>JavaScript</strong>. 
            Proficient in creating visually appealing and engaging user interfaces for web 
            pplications, with hands-on experience in <strong>ReactJS</strong>.
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
          <img src="123.jpg" alt="Profile" className=' ' />
        </div>
      </div>
      
    </div>
  );
}

export default About;
 