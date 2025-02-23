import React, { useState, useEffect } from "react";
import "./UserProfileForm.css"; // Import the CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headtop from "./Headtop";
import {app} from "./firebase.jsx";
import {doc, getFirestore,updateDoc} from 'firebase/firestore';
import {getAuth,onAuthStateChanged}  from "firebase/auth"
import Footer from "./Footer.jsx";
function UserProfileForm({SetTriger,UTriger}) {
const auth=getAuth(app); 
const firestore=getFirestore(app);

function Handel(){
   onAuthStateChanged(auth,user=>{
     if(user){
      Update(user.email);
     }
    
   })
   }

async function Update(UserEmail){
  const doref=doc(firestore,"users",UserEmail);
 const res=await updateDoc(doref,formData);
 console.log(res);
}





  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("userProfileData");
    return savedData ? JSON.parse(savedData) : {
      username: "",
      userData: "",
      aboutMe: "",
      userImg: "",
      technicalSkills: [],
      projects: [],
      platforms: []
    };
  });

  

  // State for temporary input values for arrays
  const [techSkill, setTechSkill] = useState({ language: "", percentage: "" });
  const [project, setProject] = useState({ name: "", about: "", link: "" });
  const [platform, setPlatform] = useState({ platformName: "", username: "" });
  const [platformsData, setPlatformsData] = useState([]);

  useEffect(() => {
    localStorage.setItem("userProfileData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, userImg: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addTechSkill = () => {
    if (techSkill.language && techSkill.percentage) {
      setFormData({
        ...formData,
        technicalSkills: [...formData.technicalSkills, techSkill]
      });
      setTechSkill({ language: "", percentage: "" });
    } else {
      toast.error("Please fill out all fields for technical skill");
    }
  };

  const addProject = () => {
    if (project.name && project.about && project.link) {
      setFormData({
        ...formData,
        projects: [...formData.projects, project]
      });
      setProject({ name: "", about: "", link: "" });
    } else {
      toast.error("Please fill out all fields for project");
    }
  };

  const addPlatform = () => {
    if (platform.platformName && platform.username) {
      setFormData({
        ...formData,
        platforms: [...formData.platforms, platform]
      });
      setPlatform({ platformName: "", username: "" });
    } else {
      toast.error("Please fill out all fields for platform");
    }
  };

  const show = (e) => {
    e.preventDefault();
    if (
      formData.username &&
      formData.userData &&
      formData.aboutMe &&
      formData.userImg &&
      formData.technicalSkills.length > 0 &&
      formData.projects.length > 0 &&
      formData.platforms.length > 0
    ) {
      toast.success("Data stored successfully");
    } else {
      toast.error("Please fill out all fields");
    }
   Handel();
  
    if(UTriger==true){
      SetTriger(false);
    }else{
      SetTriger(true);
    }
   
  };

   

  return (
    
   <>
   <ToastContainer position="top-right" autoClose={3000} />
   <Headtop></Headtop>
    <div className="form-container">
     
      <h1 className="userdta">User Profile Form</h1>
      <form className="form">
        <label>
          <h2 className="htag"> Username:</h2>
          <input
            id="inputfor"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          <h2 className="htag"> User Small About:</h2>
          <textarea
              id="textareafor"
    style={{ height: "90px", overflowY: "scroll" }}
    name="userData" // Update name to match formData property
    value={formData.userData} // Bind to formData.userData
    onChange={handleChange}
          />
        </label>
        <br />

        <label>
          <h2 className="htag">About Me:</h2>
          <textarea
            id="textareafor"
            style={{ height: "150px" }}
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          <h2 className="htag">User Image Link:</h2>
          <input
            id="inputfor"
            type="file"
            name="userImg"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
        </label>

        {formData.userImg && (
          <div>
            <h3>Uploaded Image Preview:</h3>
            <img
              src={formData.userImg}
              alt="User Upload"
              style={{ maxWidth: "200px", borderRadius: "8px" }}
            />
          </div>
        )}
        <br />

        <h2 className="htag">Technical Skills</h2>
        <input
          id="inputfor"
          type="text"
          list="suggestedLanguages"
          placeholder="Programming Language"
          value={techSkill.language}
          onChange={(e) => setTechSkill({ ...techSkill, language: e.target.value })}
        />
        <datalist id="suggestedLanguages">
          <option value="HTML" />
          <option value="CSS" />
          <option value="JavaScript" />
          <option value="React" />
          <option value="Node.js" />
          <option value="Express" />
          <option value="MySQL" />
        </datalist>
        <input
          id="inputfor"
          type="number"
          placeholder="Percentage"
          value={techSkill.percentage}
          onChange={(e) => setTechSkill({ ...techSkill, percentage: e.target.value })}
        />
        <button
          id="buttonfor"
          className="btnsi"
          type="button"
          onClick={addTechSkill}
        >
          Add Technical Skill
        </button>
        <ul className="ultag">
          {formData.technicalSkills.map((skill, index) => (
            <li key={index}>
              {skill.language} - {skill.percentage}%&nbsp;
              <button
                id="buttonfor"
                className="btnwi"
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    technicalSkills: formData.technicalSkills.filter((s, i) => i !== index),
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <h2 className="htag">My Projects</h2>
        <input
          id="inputfor"
          type="text"
          placeholder="Project Name"
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />
        <textarea
          id="textareafor"
          style={{ height: "90px", overflowY: "scroll" }}
          placeholder="Project About"
          value={project.about}
          onChange={(e) => setProject({ ...project, about: e.target.value })}
        />
        <input
          id="inputfor"
          type="text"
          placeholder="Project Link"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
        />
        <button
          id="buttonfor"
          className="btnsi"
          type="button"
          onClick={addProject}
        >
          Add Project
        </button>
        <ul className="ultag">
          {formData.projects.map((proj, index) => (
            <li key={index}>
              {proj.name} - {proj.about} - <a id="prolink" href={proj.link}>{proj.link}</a>
              <button
                id="buttonfor"
                className="btnwi"
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    projects: formData.projects.filter((_, i) => i !== index),
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <h2 className="htag">Competitive Programming Platforms</h2>
        <select
          id="inputfor"
          value={platform.platformName}
          onChange={(e) => setPlatform({ ...platform, platformName: e.target.value })}
        >
          <option value="">Choose a Platform</option>
          {!formData.platforms.some((plat) => plat.platformName === "LeetCode") && (
            <option value="LeetCode">LeetCode</option>
          )}
          {!formData.platforms.some((plat) => plat.platformName === "CodeChef") && (
            <option value="CodeChef">CodeChef</option>
          )}
        </select>
        <input
          id="inputfor"
          type="text"
          placeholder="Platform Username"
          value={platform.username}
          onChange={(e) => setPlatform({ ...platform, username: e.target.value })}
        />
        <button
          id="buttonfor"
          className="btnsi"
          type="button"
          onClick={addPlatform}
        >
          Add Platform
        </button>
        <ul className="ultag">
          {formData.platforms.map((plat, index) => (
            <li key={index}>
              {plat.platformName} - {plat.username}
              <button
                id="buttonfor"
                className="btnwi"
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    platforms: formData.platforms.filter((_, i) => i !== index),
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          className="btnma"
          onClick={show}
         
        >
          Submit
        </button>
      </form>
    </div>
    <Footer></Footer>
   </>
  );
}

export default UserProfileForm;

