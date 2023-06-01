import React from 'react'
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className = "container1">
    <div className= "hometop">
       <Navbar/> 
       </div>
      <div className ="container2"> 
      <Movies/>
     </div>
      </div>
     
     )
}
