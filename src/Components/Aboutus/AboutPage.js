import React from "react";
import {Link} from 'react-router-dom'; 


const AboutPage = () => {
    return (
  <section className="about" id="about">
    <div className="container mt-3">
      <h2 className='display-4 font-weight-light text-center'>About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-5">
          <img src='https://ik.imagekit.io/asmemes/logo_TWxxiRZWf.png' style={{width: '100%'}} alt="illustration" />
        </div>
        <div className="col-md-7">
          <p className='justify-content-center p-3 fs-4 text-justify'>ASME Student section enterprise represents collective, dynamic &co-curricular activities , that focuses on helping
students prepare for professional practice though guidance /mentoring by engaging 
engineers in the industry, and the ASME volunteer community while cultivating a sense of 
contribution to society and the profession</p>
        </div>
          
      </div>
      <div className="row">
        <ul className='d-flex justify-content-center list-inline'>
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
export default AboutPage;