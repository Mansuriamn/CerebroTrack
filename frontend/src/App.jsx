import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Landing.jsx'
import AuthForms from './Auth/AuthForms.jsx'
import PorTop from './PorTop.jsx'
import UserProfileForm from './UserProfileForm.jsx'
import Charts from './Charts.jsx'
import CodeChef from './CodeChef.jsx'
import Error404 from './Error404.jsx'
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import {app} from "./firebase.jsx"
import {getAuth,onAuthStateChanged}  from "firebase/auth"
export default function App() {

const [Colldata,setColldata]=useState([]);
const [Triger,setTriger]=useState(false);
console.log(Triger);
const firestore=getFirestore(app);
const auth=getAuth(app); 

 useEffect(() => {
   
     Handel();
   
 }, [Triger]);


 
 async function getData(email){
   
   const ref=doc(firestore,"users",email);
   const snap=await getDoc(ref);
   if(snap.data()){
     setColldata(snap.data());
   }
   
 }
 function Handel(){
   onAuthStateChanged(auth,user=>{
     if(user){
      
      console.log(user.email);
       getData(user.email);
     }
    
   })
   }

  let DaTa=Colldata?.platforms ?? [];
  const leetCodeUsername = Object.values(DaTa).find(
    (v) => v?.platformName === 'LeetCode'
  )?.username;

const CodeChefUsername = Object.values(DaTa).find(
    (v) => v?.platformName === 'CodeChef'
  )?.username;
  console.log(CodeChefUsername,leetCodeUsername)
  
 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/authorform" element={<AuthForms />} />
          <Route path="/user/addedprofile" element={<UserProfileForm SetTriger={setTriger} UTriger={Triger} />} />
          <Route path="/user/home" element={<PorTop Collection={Colldata}  />} />
          <Route path="/user/platform/leetCode"   element={<Charts leetCodeUser={leetCodeUsername}  />} />
          <Route path="/user/platform/CodeChef" element={<CodeChef CodeChefUser={CodeChefUsername}  />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
   

  
  )
}

