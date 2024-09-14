import React from 'react'

function SkillCard({imageUrl}) {
  return (
    <div className='h-44 w-40 border border-black rounded-lg flex items-center justify-center'>
        <img src= {imageUrl} className='h-32 rounded-full' />
    </div>
  )
}

export default SkillCard