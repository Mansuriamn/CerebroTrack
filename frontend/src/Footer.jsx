import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>
    
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
   <section   id="contact">
    <div className="footer-waves">
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3" />
      <div className="wave" id="wave4" />
    </div>



    <div className="footer-content">
      <div className="footer-section">
        <h3 id='lets'>Let's Connect</h3>
        {/* <div className="home-Sci">
          <a href="https://www.instagram.com/coding419" target="_blank" style={{"--i":"7"}}><i className="bx bxl-instagram-alt" /></a>
          <a href="https://wa.me/+919832023985" target="_blank" style={{"--i":"8"}}><i className="bx bxl-whatsapp" /></a>
          <a href="https://www.linkedin.com/in/shekh-dalim-941884275/" target="_blank" style={{"--i":"9"}}><i className="bx bxl-linkedin-square" /></a>
          
          <a href="https://github.com/Shekh-Dalim" target="_blank" style={{"--i":"10"}}><i className="bx bxl-github" /></a>
        </div> */}
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p><i className="bx bxs-envelope" /> mansooreeaman@gmail.com</p>
        <p><i className="bx bxs-phone" /> 9302877751</p>
      </div>
      {/* Centered Copyright Section */}
      <div className="footer-section copyright-section">
        <h3 id='lets' className="copyright-text copy">© 2024 Aman Mansuri | All Rights Reserved</h3>
      </div>
    </div>
  </section>
   </>
  )
}
