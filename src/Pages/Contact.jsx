import React from 'react'
import './Pages.css'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
function Contact() {
  return (
    <div className='contact1'>
     <div className='contact'>

<h1>Contact Information</h1>
<p>
Open to internship and junior developer opportunities. Feel free to reach out.
</p>
<div className="contact-info">
  <a href="mailto:hadiamushtaq397@gmail.com">
    <FaEnvelope className='email'/> hadiamushtaq397@gmail.com
  </a>

  <a href="https://www.linkedin.com/in/hadia-mushtaq-03238a397" target="_blank" rel="noreferrer">
    <FaLinkedin className='linkedin'/>https://www.linkedin.com/in/hadia-mushtaq-03238a397
  </a>

  <a href="https://github.com/HadiaMushtaq-Dev" target="_blank" rel="noreferrer">
    <FaGithub className='github'/> https://github.com/HadiaMushtaq-Dev
  </a>

  <a href="tel:+923497224454">
    <FaPhone className='phone' /> +92-349-7224454
  </a>
</div>
     </div>

    </div>
  )
}

export default Contact
