import React,{userState} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
function ContactPage() {
    // const[FullName,setFullName]=userState('');
    // const[email,setEmail]=userState('');
    // const{phoneNumber,setPhoneNumber}=userState('');
    // const[message,setMessage]=userState('');
    const sendEmail=(e)=>{
       e.preventDefault();
      emailjs.sendForm('service_hb262p8','template_kbvfbto',e.target,'R8zxfEuUPhIZjnud9')
      .then((result)=>{console.log(result)
      },(error)=>{console.log(error.text)});
      e.target.reset();
    }
  return (
    <div className='contactPage-container'>
      <div className="form-title">
        <h1>Contact Me</h1>
      </div>
        <div className="contact-form">
        <form onSubmit={sendEmail}>
          <div className="name">
            <label htmlFor="fullName">Full Name</label><br />
            <input type="text" name='fullName' id="fullName" />
            </div> 
            <div className="mail">
            <label htmlFor="mail">Email</label><br />
            <input type="email" name="email" id="" />
            </div>
            <div className="number">
            <label htmlFor="phoneNumber">Phone Number</label><br />
            <input type="text" name='phoneNumber' id="phoneNumber" />
            </div>
            <div className="message">
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id=""  /> 
            </div>
            <div className="send-button">
              <button className='btn btn-success'>Send</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ContactPage