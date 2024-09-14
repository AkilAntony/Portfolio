import React from 'react'
import SkillCard from './SkillCard'
import ExpressIcon from '../../../Assets/express.png'
import NodeIcon from '../../../Assets/node.png'
import ReactIcon from '../../../Assets/react.png'
import MongoDb from '../../../Assets/mongodb.png'
import HtmlIcon from '../../../Assets/html.png'
import CssIcon from '../../../Assets/css.png'
import JsIcon from '../../../Assets/js.png'
import JwtIcon from '../../../Assets/jwt.png'
import MuiIcon from '../../../Assets/mui.png'
import TailwindCSsIcon from '../../../Assets/Tailwind.png'
import BootstrapIcon from '../../../Assets/bootstrap.png'
import ExpoIcon from '../../../Assets/expo.png'
import FirebaseIcon from '../../../Assets/firebase.png'
import vercelIcon from '../../../Assets/vercel.png'
import gitIcon from '../../../Assets/git.png'

function Skills() {
     const skillIcons = [JsIcon,ExpressIcon,NodeIcon,ReactIcon,
            HtmlIcon,CssIcon,MongoDb,JwtIcon,MuiIcon,TailwindCSsIcon, BootstrapIcon,
            ExpoIcon,FirebaseIcon,vercelIcon,gitIcon]
  return (
    <div className="skills  min-h-[100vh] md:h-[100vh] flex flex-col 
            items-center bg-white md:justify-center mt-20 md:mx-10 mx-4">
        <div>
            <p className="text-3xl md:text-5xl font-medium antialiased text-center">
                <span className="font-mono">My</span>
                <span className="font-extrabold"> Skills</span>
            </p>
        </div>
       
       <div className='flex flex-wrap items-center justify-center gap-2 md:gap-5 mt-10'>
            {skillIcons.map((icon)=>(
                <SkillCard imageUrl = {icon} /> 
            ))}
       </div>
  
      </div>
  )
}

export default Skills