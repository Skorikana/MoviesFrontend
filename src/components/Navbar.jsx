import React from 'react'
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { Link } from "react-router-dom"
import "../App.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://imgur.com/1dLYMTU.jpg" className="logo" alt="logo" />
        </div>
        <div className="menuitems">
          <Link to="/"><h4 className="menu1">Home</h4></Link> &nbsp; &nbsp;
          <Link to="/create"><h4>AddMovie</h4></Link> &nbsp;&nbsp;
        </div>
        <div className="contact">
          <Link to="/Contact"><h4>Contact</h4></Link> &nbsp; &nbsp;
          </div>
          <div className ="icons">
          <SearchIcon /> &nbsp; &nbsp;
          <NotificationsPausedIcon /> &nbsp; &nbsp;
          <MovieCreationIcon/>
      </div>
      </div>
    </div>

  )
}


