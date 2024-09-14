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
import Experience from "./components/portfolio/Experience/Experience";
import Skills from "./components/portfolio/Skill/Skills";

function App() {
  return (
    <React.Fragment >
      {/* Routes */}
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <ContactPage/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
