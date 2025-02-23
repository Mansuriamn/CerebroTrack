import React, { useEffect, useState } from 'react'
import "./PorTop.css"
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Footer from './Footer';
import Headtop from './Headtop';



export default function PorTop({Collection}) {

  
  const [CollData,setCollData]=useState({});

  useEffect(() => {
    if (Collection) {
      setCollData(Collection);
    }
  }, [Collection]);
    
  if (!CollData || !CollData.platforms || !CollData.technicalSkills || !CollData.projects) {
    return <div className="loading">Loading...</div>
  }
  


  return (
   <>
  <Headtop ></Headtop>
   <section className="home">
    <div className="home-content">
      <h3>Hello</h3>
     
      <h1 className='username'>{CollData.username} </h1>
      
      <h3>And I'm a <span className="text" /></h3>
      <p>
         {CollData.userData} 
      </p>
      {/* Image logos for platforms like LeetCode, CodeChef, Replit, and a resume icon */}
      <div className="home-Sci">
       
        <h1 className='imageleet'></h1>
        
      </div>
      <button  className="port_btnbox" style={{width:"200px"}}>More About Me</button>
      
    </div>
    {/* <div className="about-img1">
      <img className="img1" src={userdata.about.about_img} alt />
    </div> */}
  </section>
   <About AboutMe={CollData.aboutMe} AboutImg={CollData.userImg}></About>
   <Skill AllSkills={CollData.technicalSkills}></Skill>
   <Project AlProjects={CollData.projects}></Project>
   <Footer></Footer>
   </>
  )
}

