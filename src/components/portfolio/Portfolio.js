import React from 'react'
import "./portfolio.css"
import { useState } from "react"
import ContactPage from './ContactPage';
 
function Portfolio() {
  const[toggleButton,setToggleButton]=useState(true);
   
  return (
    <React.Fragment>
    <div className='mainContainer'>
        <div className="navbar">
            <div className="navHeader">
                <h2 style={{color:'white'}}>Name Here...</h2>
            </div>

            {/* visible only for mobile screens */}
            <div className="toggleButton"
                onClick={()=>setToggleButton(!toggleButton)}>
              {toggleButton? <>
                  <span className='toggleBar'></span>
                  <span className='toggleBar'></span>
                  <span className='toggleBar'></span></>:null
              }
            </div>

            <div className="navLinks">
                <a href="http://">About</a>
                <a href={<ContactPage/>}>Contact</a>
                <a href="http://">Portfolio</a>
            </div>
        </div>
        <div className="body">
          <div className="photo">
            <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="" />
          </div>
          <div className="Bio">
            <h1>Name</h1>
          </div>
          <div className="description">
            <h6>Software Developer</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio