import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../img/logo.png';
import './../App.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="logoHolder">
        <NavLink to='/'>
          <btn onClick="window.location.reload();" class="navbar-brand text-white"> <img className="navLogo" src={logo} alt="temp" />&nbsp;&nbsp;&nbsp;Mac DECA U</btn>
        </NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
          <NavLink to='/about' activeClassName="navActive">
            <li className="nav-item">
              <btn className="nav-link">About Us</btn>
            </li>
          </NavLink>
          <NavLink to='/exec' activeClassName="navActive">
            <li className="nav-item">
              <btn className="nav-link">Executive</btn>
            </li>
          </NavLink>
          <NavLink to='/events' activeClassName="navActive">
            <li className="nav-item">
              <btn className="nav-link">Events Calendar</btn>
            </li>
          </NavLink>
          <NavLink to='/resources' activeClassName="navActive">
            <li className="nav-item">
              <btn className="nav-link">Resources</btn>
            </li>
          </NavLink>
          <NavLink to='/sponsors' activeClassName="navActive">
            <li className="nav-item">
              <btn className="nav-link">Sponsors</btn>
            </li>
          </NavLink>
          <NavLink to='/sponsors' activeClassName="navActive">
            <li className="nav-item mobile-only">
              <btn className="nav-link text-info">Sign up</btn>
            </li>
          </NavLink>
        </ul>
      </div>
      <form class="form-inline my-2 my-lg-0 desktop-only">
        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Sign up</button>
      </form>
    </nav>
  );
}
export default Nav;