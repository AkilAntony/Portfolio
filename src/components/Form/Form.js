 import React from 'react'
 import './Form.css'
 function Form() {
   return (
    <React.Fragment>
     <div className='main'>
        <div className="signIn">
        <form>
            <div>
            <label htmlFor="name" className='labels'>userName:</label>
            <input type="text" name="" id="" />
            </div><br /> 
            <div>
            <label htmlFor="password"  className='labels'>Password:</label>
            <input type="password" name="" id="" />
            </div>
        </form>
        </div>
     </div>
  </React.Fragment>
   )
 }
 
 export default Form