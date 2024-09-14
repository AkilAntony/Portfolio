import React from 'react'
import ProjectCard from './ProjectCard'
import HabotImage from '../../../Assets/Projects/Habot.png'
import AccoladesImage from '../../../Assets/Projects/Accolades.png'
import ImageCropper from '../../../Assets/Projects/ImageCropper.png'
import WeatherAppImage from '../../../Assets/Projects/WeatherApp.png'
import BMI from '../../../Assets/Projects/BMI.png'

function Project() {
  const projects = [
    {title:'Habot Website - Design', image:HabotImage, link:'https://habot-task.vercel.app/'},
    {title:'Accolades Website - Design',image:AccoladesImage,link:'https://accolades-integrated-task.vercel.app/'},
    {title:'Image Cropper', image:ImageCropper,link:'https://image-cropper-two.vercel.app/'},
    {title:'Weather App', image:WeatherAppImage,link:'https://weatherapp-865bc.web.app/'},
    {title:'BMI Calculator', image:BMI,link:'https://akilantony.github.io/BMI-Calculator/'}]

  return (
    <div className='flex flex-col mx-4 md:mx-10 min-h-[100vh]' id = 'projects'>
      <div>
        <p className='text-3xl md:text-5xl font-medium 
                    antialiased text-center text-black md:mb-6 mb-4 mt-12'> 
          <span className='text-mono'>My </span>
          <span className='font-extrabold' > Projects</span>
        </p> 
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-10'>
        {projects.map((project,index)=>(
          <ProjectCard title ={project.title} 
            image ={project.image} key={index}
            link = {project.link}/>
        ))}
      </div>
      
    </div>
     
  )
}

export default Project

 