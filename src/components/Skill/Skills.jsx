import React from 'react'

function Skills() {
  return (
    <div className="skills  mt-5 md:mt-0 ml-2 mr-2 h-[100vh flex flex-col pb-4">
        <p className="text-3xl md:text-5xl font-medium antialiased text-center">
          <span className="font-mono">My</span>
          <span className="font-extrabold"> Skills</span>
        </p>
        <div className='w-ful mt-4'>


        <div className="skillContainer  flex-col  w-full md:w-1/2 j md:mx-auto mt-3">
        
        {/* Skill 1 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">HTML 5</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">97%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "97%"}}></div>
            </div>
              
              {/* Skill 2 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">CSS 3</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">65%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "65%"}}></div>
            </div>

            {/* Skill 3 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">JavaScript</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "95%"}}></div>
            </div>

            {/* Skill 4 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">React JS</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">87%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "87%"}}></div>
            </div>

            {/* Skill 1 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">Bootstrap 5</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "95%"}}></div>
            </div>

            {/* Skill 1 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">Tailwind CSS</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">65%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "65%"}}></div>
            </div>

            {/* Skill 1 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">Express Js</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">55%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div className="bg-black h-2.5 rounded-full" style={{width: "55%"}}></div>
            </div>

            {/* Skill 1 */}
       
            <div className="flex justify-between mb-1">
                <span className="text-black font-medium  dark:text-white">Java</span>
                <span className="text-sm font-medium text-blac-700 dark:text-white">50%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 ">
                <div className="bg-black h-2.5 rounded-full" style={{width: "50%"}}></div>
            </div>
              
        </div>
        </div>

      </div>
  )
}

export default Skills