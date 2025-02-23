import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AuthForms.css";
import { Link, useNavigate } from 'react-router-dom';
import {app} from '../firebase.jsx'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,setDoc} from 'firebase/firestore'

const AuthForms = () => {



const firestore=getFirestore(app);
const auth=getAuth(app);

const navi=useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for both forms
    if (isSignup) {
      if (!formData.username || !formData.email || !formData.password) {
        toast.error('Please fill out all fields for Signup!');
        return;
      }
      if (!formData.email.includes('@')) {
        toast.error('Please enter a valid email!');
        return;
      }
      if (formData.password.length < 6) {
        toast.error('Password should be at least 6 characters long!');
        return;
      }
    
    } else {
      if (!formData.email || !formData.password) {
        toast.error('Please fill out all fields for Login!');
        return;
      }
      if (formData.password.length < 6) {
        toast.error('Password should be at least 6 characters long!');
        return;
      }
      
     
    }
  if (isSignup) {
  SignUp();
} else {
  SignIn();
}
 

  };

  async function Write(uid) {
    const userRef = doc(firestore, "users", uid); // Using uid as Document ID
    await setDoc(userRef, Data);
    console.log("User data written successfully!");
  }

 function SignUp(){
  createUserWithEmailAndPassword(auth,formData.email,formData.password)
  .then((userCredential) => {
     toast.success('Signup Successful!');
     
     Write(formData.email);

    navi('/user/home');
  
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
   
  });
 }
 function SignIn(){
   signInWithEmailAndPassword(auth,formData.email,formData.password)
   .then((userCredential) => {
     toast.success('Login Successful!');
    navi('/user/home');
    })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
  
   });
 }
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="main-container">
        <div className="form-wrapper">
          <div className="form-content" style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0%)' }}>
            
            {/* Login Form */}
            <form className={`auth_form login-form ${!isSignup ? 'active' : ''}`} onSubmit={handleSubmit}>
              <h2>Welcome Back!</h2>
              <p>Login to your account to continue</p>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
                <span className="input-icon">📧</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
                <span className="input-icon">🔒</span>
              </div>
              <button  type="submit" className="auth_btn">Login</button>
              <p className="switch-text">
                Don’t have an account?{' '}
                <span className="toggle-form" onClick={toggleForm}>
                  Sign Up
                </span>
              </p>
            </form>

            {/* Signup Form */}
            <form className={`auth_form signup-form ${isSignup ? 'active' : ''}`} onSubmit={handleSubmit}>
              <h2>Create Account</h2>
              <p>Sign up to explore new opportunities</p>
              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  required
                />
                <span className="input-icon">👤</span>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
                <span className="input-icon">📧</span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
                <span className="input-icon">🔒</span>
              </div>
              <button type="submit" className="auth_btn">Sign Up</button>
              <p className="switch-text">
                Already have an account?{' '}
                <span className="toggle-form" onClick={toggleForm}>
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForms;


export const Data = {
  username: "Aman Mansuri",
  userData: "I am a Web Developer skilled in DSA and C++ with over 300+ problems solved on LeetCode , a contest rating of 1600 , and a Codeforces rating of 676.",
  aboutMe: "Aman Mansuri is a dedicated computer science student pursuing a B.Tech degree at Shri Ram Group of Institution, Jabalpur. With a strong foundation in full-stack development, Aman has mastered technologies like React, Express, and MySQL. He is passionate about creating innovative projects like FitSphere, Bit Parkin, and Edible Insight, showcasing his problem-solving skills. Currently, Aman is focused on competitive programming and preparing for internships in 2025. He actively participates in hackathons, study jams, and community events to sharpen his technical expertise and network with like-minded professionals.",
  userImg: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGV8ZW58MHx8MHx8fDA%3D",
  technicalSkills: [{language: 'HTML', percentage: '90'}],
  projects: [
    {
    about: "This is my first project  .",
   link: "https://www.flipkart.com/?affid=affveve&affExtParam1=e595aa977861952222d42ad913f9cab4&affExtParam2=60827",
    name: "TodoApp"
    }
  ],
  platforms: [
    {platformName: 'LeetCode', username: 'mansooreeaman'},
    {platformName: 'CodeChef', username: 'amanmansooree'}    

  ]
};

