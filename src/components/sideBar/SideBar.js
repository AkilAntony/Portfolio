import React,{useState} from 'react';
 
import  './sideBar.css'

function SideBar() {
  const data=[{project:'A CDC India NTT AD AM Leave'},
              {project:'A CDC India NTT AD AM Holiday'},
              {project:'A CDC -NTT AMS Training'},
              {project:'NTT Com-GBS AngularJS Update'}]
  const [date,setDate]=useState(1);
  console.log(date);

  return (
    
    <React.Fragment>
     <div className='sideBarContainer'>
       <div className='sideBarContainer-1'>
         <label htmlFor="date" className='label'>Work Week :</label>
         <input type="date"/>
       </div>
       <div className="sideBarContainer-2">
        <h6>Add Entry To TimeSheet</h6>
        <label htmlFor="project" className='label'>Project</label>
        <br />
        <select name="project" id="project">
          {data.map(projectDetails=><option value="{projectDetails.project}">{projectDetails.project}</option>)}
        </select>
        <br />
        <label htmlFor="projectActivity" className='label'>Project Activity</label>
        <br />
        <select name="projectActivity" id="activity">
          <option value=""></option>
           
        </select>
        <br />
        <label htmlFor="projectStage" className='label'>Project Stage</label>
        <br />
        <select name="projectStage" id="stage">
          <option value=""></option>
        </select>
        <br />
        <div className='day-hour'>
        <label htmlFor="day">Day</label>
        <br />
        <select name="day" id="day">
          <option value=""></option>
        </select>
        <label htmlFor="hours" className='hour'>Hours</label>
        <br />
        <input type="text" name="hours" id="hours" className='hour'/>
        </div>
       </div>
     </div>
    </React.Fragment>
  )
}

export default SideBar