import React from 'react'
import "./About.css"
export default function About({AboutMe,AboutImg}) {
         
       
  return (
    <section className="about" id="about">
    <div className="about-img">
      <img src={AboutImg}  />
     
    </div>
    <div className="about-text">
      <h1 className="sub-title">About <span>Me</span></h1>
     
      <p>{AboutMe} <span  className='home-Sci hea'>
          </span> </p>
     
    </div>
    
  </section>
  )
}
