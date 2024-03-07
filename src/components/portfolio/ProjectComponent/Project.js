import React from 'react'
import './Project.css'

function Project() {
  return (
    <div className='projects bg-stone-100 
       flex flex-col items-center justify-center w-full mb-4'>
          
          {/* title start*/}
      <p className='text-3xl md:text-5xl font-medium 
                    antialiased text-center text-black md:mb-6 mb-4 mt-12'> 
        <span className='text-mono'>My </span>
        <span className='font-extrabold' > Projects</span>
      </p> 
      {/* title end */}

      {/* project start */}
      <div className='project flex items-center justify-center w-11/12 flex-wrap'>

        {/* projext 1 start */}
        <div className="project-card bg-white  text-black ml-2 mr-2 
           shadow-md hover:shadow-lg rounded-lg 
            mb-3 w-full md:w-1/3 h-full md:h-52  py-3 md:py-3
            " id='projects '>
          <h3 className='text-xl font-bold  text-center'>Weather App</h3>
          <p className='ml-3 mr-3 '>
            This Angular application, named Weather App, is designed to provide users with real-time 
            weather information based on the user input (location).
          </p>
          <div className='buttonContainer ml-3 mr-3 flex gap-2 mt-2'>
            <button className='bg-black  rounded-full text-sm text-white'>
              <a href='https://github.com/AkilAntony/weatherApp'
                className='ml-3 mr-3 text-sm  hover:text-white' >View in Github
              </a>
            </button>
            <button className='bg-black rounded-full text-white py-1 text-sm '>
              <a href='https://weatherapp-865bc.web.app/'
                className='ml-3 mr-3  hover:text-white ' >Preview
              </a>
            </button>
          </div>
        </div>
         {/* project 1 end */}

         {/* projext 2 start */}
          <div className="project-card bg-white  text-black ml-2 mr-2 
           shadow-md hover:shadow-lg rounded-lg 
            mb-3 w-full md:w-1/3 h-full md:h-52 py-3 md:py-3
            " id='projects '>
          <h3 className='text-xl font-bold  text-center'>Movie Trailer App</h3>
          <p className='ml-3 mr-3 '>
            This Netflix design project is a web application that fetches movie posters and trailers from the TMDB (The Movie Database) API. 
            Users can click on movie posters to play the trailers for specific movies.
          </p>
          <div className='buttonContainer ml-3 mr-3 flex gap-2 mt-2'>
            <button className='bg-black  rounded-full text-white py-1 text-sm '>
              <a href='https://github.com/AkilAntony/netflix-clone'
                className='ml-3 mr-3 hover:text-white' 
                >View in Github
              </a>
            </button>
            <button className='bg-black rounded-full text-white py-1 '>
              <a href='https://netflix-clone-f2de6.web.app/'
                className='ml-3 mr-3  hover:text-white text-sm' >Preview
              </a>
            </button>
          </div>
        </div>
         {/* project 2 end */}

          {/* projext 3 start */}
          <div className="project-card bg-white  text-black ml-2 mr-2 
           shadow-md hover:shadow-lg rounded-lg 
            mb-3 w-full md:w-1/3 md:h-52 h-full py-3 md:py-3
            " id='projects '>
          <h3 className='text-xl font-bold  text-center'>BMI Calculator</h3>
          <p className='ml-3 mr-3 '>
            This BMI calculator is a simple JavaScript application that calculates the Body Mass 
            Index (BMI) based on user-provided height and weight inputs.
          </p>
          <div className='buttonContainer ml-3 mr-3 flex gap-2 mt-2'>
            <button className='bg-black  rounded-full text-white text-sm py-1 '>
              <a href='https://github.com/AkilAntony/BMI-Calculator'
                className='ml-3 mr-3 ' >View in Github
              </a>
            </button>
            <button className='bg-black rounded-full text-white py-1 '>
              <a href='https://akilantony.github.io/BMI-Calculator/'
                className='ml-3 mr-3  hover:text-white text-sm' >Preview
              </a>
            </button>
          </div>
        </div>
         {/* project 3 end */}
         
          {/* projext 4 start */}
          <div className="project-card bg-white  text-black ml-2 mr-2 
           shadow-md hover:shadow-lg rounded-lg 
            mb-3 w-full md:w-1/3 h-full md:h-52 py-3 md:py-3
            " id='projects '>
          <h3 className='text-xl font-bold  text-center'>QR Code Generator</h3>
          <p className='ml-3 mr-3 '>
            This application allows users to generate QR codes by 
            entering a URL and clicking the "Generate QR Code" button.
          </p>
          <div className='buttonContainer ml-3 mr-3 flex gap-2 mt-2'>
            <button className='bg-black  rounded-full text-white text-sm py-1 '>
              <a href='https://github.com/AkilAntony/QR-code-generator/tree/master'
                className='ml-3 mr-3 hover:text-white' >View in Github
              </a>
            </button>
          </div>
        </div>
         {/* project 4 end */}

          {/* projext 5 start */}
          <div className="project-card bg-white  text-black ml-2 mr-2 
           shadow-md hover:shadow-lg rounded-lg 
            mb-3 w-full md:w-1/3 h-full md:h-52 py-3 md:py-3
            " id='projects '>
          <h3 className='text-xl font-bold  text-center'>Character Counter</h3>
          <p className='ml-3 mr-3 '>
           This is a simple JavaScript function that counts the number of characters
           entered in an input field and provides feedback to the user.
          </p>
          <div className='buttonContainer ml-3 mr-3 flex gap-2 mt-2 '>
            <button className='bg-black  rounded-full
               text-white text-sm py-1 hover:shadow-2xl'>
              <a href='https://github.com/AkilAntony/CharacterCounter'
                className='ml-3 mr-3 hover:text-white ' >View in Github
              </a>
            </button>
            <button className='bg-black rounded-full text-white py-1 text-sm'>
              <a href='https://akilantony.github.io/CharacterCounter/'
                className='ml-3 mr-3 ' >Preview
              </a>
            </button>
          </div>
        </div>
         {/* project 5 end */}

      </div>
    </div>
     
  )
}

export default Project