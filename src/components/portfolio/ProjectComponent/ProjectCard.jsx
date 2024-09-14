import React from 'react'
import { Link } from 'react-router-dom'
 

const ProjectCard = ({image,title,link}) => {
  return (
    <div  className='w-72 mt-8 bg-white rounded-lg hover:shadow-md
            border border-black object-contain hover:cursor-pointer  '>
        <a href={link} target="_blank">
      <img
        src={image}
        alt="Image"
        className='h-48 rounded-t-md'
      />
      <div className='p-3 min-h-20'>
        <h2 className='text-xl font-bold hover:text-blue-600 ml-1'>
          {title}</h2>
          {/* <p className='ml-1 text-xs</p> */}
      </div>
      </a>
    </div>
  )
}

export default ProjectCard
