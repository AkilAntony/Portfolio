import React from 'react'

function Experience() {
  return (
    <div className='  bg-white text-white min-h-[100vh] flex 
            flex-col items-center justify-center  md:mx-10 mx-4 mt-20 p-10 '>
      
        <div>
            <p className='text-3xl md:text-5xl font-medium antialiased text-center text-black mb-4'>
                <span className='font-mono'>My </span>
                <span className='font-extrabold'>Experience</span>
            </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center mx-4 mt-10
                flex-wrap gap-3'>
            
            <div className=' md:w-2/1 md:mx-auto  px-4 text-black  w-80 
                    shadow-md hover:shadow-lg rounded-lg mt-2 py-0.5  bg-gray-50'>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='flex items-center m-2 gap-2' >
                        <img src="Giraffic.png" alt="" className=' h-full w-11' />
                        <div className='text-xl font-bold'>ReactJS Developer</div>
                    </div>
                    <div className='ml-6 mb-3  text-sm font-semibold'>Nov 2023- May 2024</div>
                </div>
                <div className='description ml-6 mb-5'>
                Developed responsive and user-friendly web applications using React.js,
                ensuring high performance and scalability.
                </div>   
            </div>

            <div className=' md:w-2/1 md:mx-auto px-4 text-black 
                   w-80 shadow-md hover:shadow-lg rounded-lg  py-0.5 bg-gray-50'>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='flex items-center m-2 gap-2' >
                        <img src="ntt.png" alt="" className=' h-full w-11' />
                        <div className='text-xl font-bold '>Associate Graduate</div>
                    </div>
                    
                    <div className='ml-6 mb-3  text-sm font-semibold'>Aug 2022- Jul 2023</div>
                </div>
                <div className='description ml-6 mb-5'>
                    As an Associate Graduate at NTT Ltd, 
                    I took on a key responsibility in creating the user interface for a 
                    telecom billing application.
                </div>   
            </div>

            <div className=' md:w-2/1 md:mx-auto  px-4 text-black w-80  
                    shadow-md hover:shadow-lg rounded-lg mt-2 py-0.5  bg-gray-50'>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='flex items-center m-2 gap-2' >
                        <img src="trinity.png" alt="" className=' h-full w-11' />
                        <div className='text-xl font-bold'>Intern</div>
                    </div>
                    
                    <div className='ml-6 mb-3  text-sm font-semibold'>Feb 2022- Jul 2022</div>
                </div>
                <div className='description ml-6 mb-5'>
                As an intern, I had the opportunity to delve into the world of web development by 
                learning to create Single Page Applications (SPAs) using Angular.
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Experience