import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from './../img/logo.png';
import './../App.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="logoHolder">
        <NavLink to='/'>
          <a class="navbar-brand" href="#"> <img className="navLogo" src={logo} alt="temp" />&nbsp;&nbsp;&nbsp;Mac DECA U</a>
        </NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
          <NavLink to='/about' activeClassName="navActive">
            <li className="nav-item">
              <a className="nav-link">About Us</a>
            </li>
          </NavLink>
          <NavLink to='/exec' activeClassName="navActive">
            <li className="nav-item">
              <a className="nav-link">Executive</a>
            </li>
          </NavLink>
          <NavLink to='/events' activeClassName="navActive">
            <li className="nav-item">
              <a className="nav-link">Events Calendar</a>
            </li>
          </NavLink>
          <NavLink to='/resources' activeClassName="navActive">
            <li className="nav-item">
              <a className="nav-link">Resources</a>
            </li>
          </NavLink>
          <NavLink to='/sponsors' activeClassName="navActive">
            <li className="nav-item">
              <a className="nav-link">Sponsors</a>
            </li>
          </NavLink>
          <NavLink to='/sponsors' activeClassName="navActive">
            <li className="nav-item mobile-only">
              <a className="nav-link text-info">Sign up</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <form class="form-inline my-2 my-lg-0 desktop-only">
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Sign up</button>
      </form>
    </nav>
  );
}
export default Nav;