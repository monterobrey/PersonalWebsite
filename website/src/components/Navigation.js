// components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <div className="container-fluid p-0">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/education" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;