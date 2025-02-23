import React from 'react'
import "./Choose.css"
export default function Choose() {
  return (
   <>
    <div className="main2">
        <h1>Why Choose Us</h1>
        <div className="main-card">
          {/* Card 1 */}
          <div className="cardland">
            <div className="icon-img">
              <img
                height="150px"
                src="https://img.freepik.com/free-vector/flat-design-portfolio-template_52683-150166.jpg?ga=GA1.1.269231880.1733222811&semt=ais_hybrid"
                alt="icon"
              />
            </div>
            <h3>Personalized Portfolios</h3>
            <p>
              We offer an easy-to-use platform for creating customizable
              portfolios, showcasing photos, skills, and competitive programming
              stats to highlight your unique achievements.
            </p>
          </div>

          {/* Card 2 */}
          <div className="cardland">
            <div className="icon-img">
              <img
                height="150px"
                width="100%"
                src="https://img.freepik.com/free-vector/software-installation-contract-adjustment-agreement-terms-regulation-program-fix-coworkers-holding-gears-cartoon-character-application-bugs-vector-isolated-concept-metaphor-illustration_335657-2721.jpg?ga=GA1.1.269231880.1733222811&semt=ais_hybrid"
                alt="icon"
              />
            </div>
            <h3>Dynamic Integration</h3>
            <p>
              Seamlessly integrate stats from platforms like LeetCode, CodeChef,
              and GitHub to highlight your competitive programming milestones
              and projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="cardland">
            <div className="icon-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Qou8dQqFa6_8DXnBAo_tu2DuC9rWp8uKrCD3pBIw5cBJOOor4aCw5Yy5Gvi9gydIeWg&usqp=CAU"
                alt="icon"
              />
            </div>
            <h3>Professional and Modern Design</h3>
            <p>
              Our platform ensures a clean, responsive design with features
              like live previews and drag-and-drop customization for an
              exceptional user experience on any device.
            </p>
          </div>

          {/* Card 4 */}
          <div className="cardland">
            <div className="icon-img">
              <img
                height="150px"
                width="100%"
                src="https://img.freepik.com/free-vector/abstract-technology-ssl-illustration_23-2149236238.jpg?ga=GA1.1.269231880.1733222811&semt=ais_hybrid"
                alt="icon"
              />
            </div>
            <h3>Secure and Scalable</h3>
            <p>
              We prioritize your privacy with secure login options and data
              control. Plus, our optimized performance ensures fast loading
              times and scalability, making your portfolio stand out
              professionally.
            </p>
          </div>
        </div>
      </div>
   </>
  )
}
