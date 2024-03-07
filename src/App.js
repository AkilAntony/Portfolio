import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState, lazy,
  Suspense,
  useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/portfolio/ContactComponent/ContactPage";
import About from "./components/portfolio/AboutComponent/About";
import Project from "./components/portfolio/ProjectComponent/Project";
import Header from './components/portfolio/Header/Header'
import Footer from "./components/portfolio/FooterComponent/Footer";
import Skills from "./components/Skill/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <React.Fragment >
      {/* Routes */}
   <Header/>
      <About/>
      {/* <section id="projects">
        <h2>My Recent Works</h2>
        <div className="project-container ">
          <Project
            title="Netflix Redesign"
            description="It's a Netflix-inspired design that utilizes React JS and the..."
            image="netflix.png"
            link="https://netflix-clone-f2de6.web.app/"
          />
          <Project
            title="Weather App"
            description="It's a weather app which displays the current weather based..."
            image="weather.png"
            link="https://weatherapp-865bc.web.app/"
          />
         
        </div>
      </section> */}
      
  <Experience/>
      <Project/>
      
        <ContactPage/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
