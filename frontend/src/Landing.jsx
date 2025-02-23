import React from 'react'
import "./Landing.css"
import Explore from './Explore.jsx'
import ContactUs from './ContactUs.jsx'
import Footer from './Footer.jsx'
import { Link, useNavigate } from 'react-router-dom'
import Houses from "./houses.jsx"
import Choose from "./Choose.jsx"
import Showcasing from "./Showcasing.jsx"
import Logo from './Logo.jpg'
import {app} from "./firebase.jsx"
import {getAuth,onAuthStateChanged,signOut}  from "firebase/auth"

export default function Landing() {
 
const navi=useNavigate();
const auth=getAuth(app);



  function Handel(){
  onAuthStateChanged(auth,user=>{
    if(user){
      
     console.log(user.email);
      navi("/user/home");
    }
    else{
    navi("/user/authorform");
    }
  })
  }
  
 
  return (
    <>
     <header className="header">
      <div className="logo">
        <span className="logoimg">
          <img id='headimg'  src={Logo} alt="logo" />
        </span>
        <h2></h2>
      </div>

      <nav className="navBar">
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </nav>

      <div className="login">
        <button onClick={Handel} style={{textDecoration:"none"}}  className="btn2 ">Sign In / Up</button>
      </div>
    </header>

      <Showcasing></Showcasing>
      {/* Why Choose Us Section */}
     <Choose></Choose>
      <Explore></Explore>

       <Houses></Houses>

     <ContactUs></ContactUs>

     <Footer></Footer>
    </>
  )
}
