import React from "react";
import {Link} from 'react-router-dom'; 
import about_img from './2.png';

const About = () => {
    return (
  <section className="about" id="about">
    <div className="container mt-3">
      <h2 className='display-4 font-weight-light text-center'>About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-7 ">
          <p className=' justify-content-center p-3 fs-2'>Cultivating the upcoming engineers through dynamic and extra curricular activities under student section
          </p>
        </div>
        <div className="col-md-5">
          <img src={about_img} style={{width: '100%'}} alt="illustration" />
        </div>  
      </div>
      <div className="row">
        <ul className='d-flex justify-content-center list-inline'>
          <li>
            <Link to='/About'>
            <a className='btn btn-dark p-3 m-3' href="#">Learn more</a>
            </Link>
            </li>
          <li>
            <Link to='/Team'>
            <a className='btn btn-dark p-3 m-3' href="#">Meet the team</a>
            </Link>
            </li>
        </ul>
      </div>
    </div>
  </section>
  );
}
export default About;