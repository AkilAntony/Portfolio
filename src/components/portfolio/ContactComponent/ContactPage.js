import React from "react";
import emailjs from "emailjs-com";
 import './contact.css'

function ContactPage() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hb262p8",
        "template_kbvfbto",
        e.target,
        "R8zxfEuUPhIZjnud9"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contactPage-containe bg-white h-[100vh] flex
        flex-col items-center justify-center mx-4 mt-16" id="contact">
      <div className="form-title pt-3 ">
         <p className='text-3xl md:text-5xl font-medium 
                    antialiased text-center text-black md:mb-6 mb-4 mt-12'> 
        <span className='text-mono'>Contact</span>
        <span className='font-extrabold' > Me</span>
      </p>
        
      </div>
      <div className="contact-form ">
        <form onSubmit={sendEmail} className="flex flex-col gap-3">
          <div className="name">
            <label htmlFor="fullName">Full Name</label>
            <br />
            <input
              type="text"
              className="form-control border border-stone-300"
              name="fullName"
              id="fullName"
            />
          </div>
          <div className="mail">
            <label htmlFor="mail">Email</label>
            <br />
            <input type="email" className="form-control border border-stone-300" name="email" id="" />
          </div>
          <div className="number">
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input
              type="text"
              name="phoneNumber"
              className="form-control border border-stone-300"
              id="phoneNumber"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" className="form-control border border-stone-300" />
          </div>
          <div className="send-button">
            <button 
              className="btn bg-black rounded text-white
                hover:shadow-lg">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
