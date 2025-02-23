import React from 'react'
import "./Project.css"
export default function Project({AlProjects}) {
  

  if (!AlProjects) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="sub-title">My <span>Projects</span></h1>
          <div className="projects-list">
            {AlProjects.map((project, index) => (
              <div key={index}>
                <h2>{project.name}</h2>
                <p>{project.about}</p>
                {project.link && (
                <a id='irese' href={project.link} target="_blank" rel="noopener noreferrer">  <button className="read">
                    Read...
                  </button></a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

