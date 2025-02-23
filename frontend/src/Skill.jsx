import React from 'react'
import "./Skill.css"
export default function Skill({AllSkills}) {
 

  if(!AllSkills){
    return <div className="loading">Loading...</div>
  }

  return (
   <>
   
    <div className="container1">
      <h1 className="heading1">Technical Skills</h1>
      <div className="Technical-bars">
        <div className="Technical-bars">
  {AllSkills.map((skill, index) => (
    <div className="bar" key={index}>
      <div className="info">
        <span>{skill.language}</span>
      </div>
      <div className='num'>
         <span>{skill.percentage}%</span>
      </div>
      <div className="progress-line" style={{ "--i": index }}>
        <span style={{ width: `${skill.percentage}%` }} />
      </div>
</div>
  ))}
 
</div>
      </div>
    </div>
   
   </>
  )
}

