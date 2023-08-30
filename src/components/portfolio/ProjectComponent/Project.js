import React from 'react'
import './Project.css'

function Project({title,image,description,link}) {
  return (
     <div className="project-card" id='projects'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
  )
}

export default Project