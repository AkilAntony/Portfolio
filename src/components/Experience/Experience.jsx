import React from 'react'

function Experience() {
  return (
    <div className='  bg-stone-100 text-white h-[100vh] flex 
            flex-col items-center justify-center mt-12 md:mt-0'>
        <p className='text-3xl md:text-5xl font-medium antialiased text-center text-black mb-4'>
            <span className='font-mono'>My </span>
            <span className='font-extrabold'>Experience</span>
        </p>
        <div className=' md:w-9/12  md:mx-auto rounded-xl px-4 text-black 
                ml-2 mr-2   shadow-md hover:shadow-lg rounded-lg mb-3 py-0.5 bg-white'>
            <div className='flex justify-between items-center flex-wrap'>
                <div className='flex items-center m-2' >
                    <img src="ntt.png" alt="" className=' h-full w-11' />
                    <div className='text-xl font-bold '>Associate Graduate</div>
                </div>
                
                <div className='md:ml-0 ml-6 mb-3  text-sm font-semibold'>Aug 2022- Jul 2023</div>
            </div>
            <div className='description ml-6 mb-5'>
                As an Associate Graduate at NTT Ltd, 
                I took on a key responsibility in creating the user interface for a 
                telecom billing application. This involved not only designing visually 
                appealing interfaces but also ensuring they were user-friendly and efficient.
            </div>   
        </div>
          <div className=' md:w-9/12  md:mx-auto rounded-xl px-4 text-black ml-2 mr-2   shadow-md hover:shadow-lg rounded-lg mt-2 py-0.5  bg-white'>
            <div className='flex justify-between items-center flex-wrap'>
                <div className='flex items-center m-2' >
                    <img src="trinity.png" alt="" className=' h-full w-11' />
                    <div className='text-xl font-bold'>Associate Graduate</div>
                </div>
                
                <div className='md:ml-0 ml-6 mb-3  text-sm font-semibold'>Aug 2022- Jul 2023</div>
            </div>
            <div className='description ml-6 mb-5'>
               As an intern, I had the opportunity to delve into the world of web development by learning to create Single Page Applications (SPAs) using Angular. Throughout this experience, I gained hands-on expertise in Angular's framework.
            </div>   
        </div>
    </div>
  )
}

export default Experience