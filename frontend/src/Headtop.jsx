import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.jpg';
import "./Headtop.css";
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import {app} from "./firebase.jsx"
import {getAuth,onAuthStateChanged}  from "firebase/auth"
export default function Headtop() {

  const [Colldata,setColldata]=useState([]);
  
  const firestore=getFirestore(app);
  const auth=getAuth(app); 
  
   useEffect(()=>{
     Handel();
     
   },[])
   
   async function getData(email){
     
     if(!email){
       console.error("No email provided");
       return;
     }
     try{
       const ref=doc(firestore,"users",email);
       const snap=await getDoc(ref);
       if(snap.data()){
         setColldata(snap.data());
       }
     }catch(err){
       console.error(err);
     }
     
   }
   
   function Handel(){
     onAuthStateChanged(auth,user=>{
       if(user){
         getData(user?.email);
       }
      
     })
     }



  const [platdata,setplatdata]=useState([]);
  useEffect(()=>{
    if(Colldata?.platforms){
      setplatdata(Colldata.platforms);
    }
  },[Colldata])
 
  return (
    <div className='tophead'>
      <div className='topimg'>
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <nav className='topul'>
        <Link className='toplink' to="/user/home">Home</Link>
        {platdata? platdata.map((v,i)=>{
          return(
            <>
          {(v.platformName == "LeetCode")?<Link  className='toplink' to="/user/platform/leetCode">LeetCode</Link>:''}
          {(v.platformName ==  "CodeChef")?<Link  className='toplink' to="/user/platform/CodeChef">CodeChef</Link>:'' }
            </>
          )
        }):<p >Loading...</p>}
       
      </nav>

      {/* Button */}
      <div className='topbtn'>
        <Link to="/user/addedprofile"><button>Added</button></Link>
      </div>
    </div>
  );
}

