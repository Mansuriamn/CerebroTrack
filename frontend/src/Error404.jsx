import React from 'react'
import './Error404.css'
import { Link } from 'react-router-dom'
export default function Error404() {
  return (
   <>
   <div className="sectionerr">
  <h1 className="error">404</h1>
  <div className="pageerr">Ooops!!! The page you are looking for is not found</div>

  <Link to={"/user/home"} className="back-homeerr">Back to home</Link>
</div>

   
   
   </>
  )
}
