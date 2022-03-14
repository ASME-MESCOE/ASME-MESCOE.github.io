import React from "react";
import {
  Link
} from "react-router-dom";
import './Navbar.css';
import {
  HashLink
} from 'react-router-hash-link';
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg nav-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img width="30" height="24" className="d-inline-block align-text-top" src={logo} alt="logo"/>
        ASME MESCOE
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="fa fa-bars" style={{color:'#ffffff'}}></i></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
        <ul className="navbar-nav ">
        <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Team </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;