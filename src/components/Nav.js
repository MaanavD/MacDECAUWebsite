import React from 'react';
import { Link } from "react-router-dom";
import logo from './../img/logo.png';
import './../App.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
       <div className="logoHolder">
       <Link to='/'>
       <a class="navbar-brand" href="#"> <img className="navLogo" src={logo} alt="temp"/>&nbsp;&nbsp;&nbsp;Mac DECA U</a>
      </Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <Link to='/about'>
          <li className="nav-item">
            <a className="nav-link">About Us</a>
          </li>
          </Link>
          <Link to='/exec'>
          <li className="nav-item">
            <a className="nav-link">Executive</a>
          </li>
          </Link>
          <Link to='/events'>
          <li className="nav-item">
            <a className="nav-link">Events</a>
          </li>
          </Link>
          <Link to='/resources'>
          <li className="nav-item">
            <a className="nav-link">Resources</a>
          </li>
          </Link>
          <Link to='/sponsors'>
          <li className="nav-item">
            <a className="nav-link">Sponsors</a>
          </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;