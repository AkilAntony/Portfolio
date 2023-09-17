import React from "react";
import "./About.css";
import { Link } from "react-scroll";
 

function About() {
  return (
    <section className="about-section">
  
      <div className="aboutContainer">
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
      </div>
      <div className="about-content" id="about">
        <div className="about-image">
          <img src="me.jpg" alt="Profile" />
        </div>
      </div>
      <div className="skills">
        <h2>Hi, I’m Akil. Nice to meet you.</h2>
        <p>
          I'm a certified front-end developer with 1 year of industry
          experience. My expertise lies in creating captivating user interfaces,
          blending design aesthetics with functionality. I have a strong command
          over React.js and Angular
        </p>
        <h3>Skills</h3>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Angular</li>
          <li>ReactJs</li>
        </ul>
        <a
          href="Akil.pdf"
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-danger">Download CV</button>
        </a>
        <div className="techMedia">
          <a href="https://github.com/AkilAntony">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/akil-a-l-533b38207/">
            <img
              src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
              alt=""
            />
          </a>
          <a href="">
            <img src="/fb1.png" alt="" />
          </a>
          <a href="https://www.instagram.com/mr_ak_i_l/">
            <img
              src="https://kuttybooks.com/static/media/InstagramOctDenoiserBeauty_001%20copy.f9ea6da973a665c74937.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
 