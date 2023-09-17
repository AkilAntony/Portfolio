import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/portfolio/ContactComponent/ContactPage";
import About from "./components/portfolio/AboutComponent/About";
import Project from "./components/portfolio/ProjectComponent/Project";
import Header from './components/portfolio/Header/Header'
import Footer from "./components/portfolio/FooterComponent/Footer";

function App() {
  return (
    <React.Fragment>
      {/* Routes */}
   <Header/>
      <About/>
      <section id="projects">
        <h2>My Recent Works</h2>
        <div className="project-container">
          <Project
            title="Netflix Redesign"
            description="It's a Netflix-inspired design that utilizes React JS ..."
            image="netflix.png"
            link="https://www.example-ecommerce.com"
          />
          <Project
            title="E-commerce Redesign"
            description="Revamped the user interface of an e-commerce website..."
            image="project1.jpg"
            link="https://www.example-ecommerce.com"
          />
         
        </div>
      </section>
      <ContactPage/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
