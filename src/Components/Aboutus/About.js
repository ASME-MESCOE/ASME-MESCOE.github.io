import React from "react";
import about_img from './2.png';

const About = () => {
    return (
  <section class="about" id="about">
    <div class="container mt-3">
      <h2 class='display-4 font-weight-light text-center'>About Us</h2>
      <div class="row align-items-center">
        <div class="col-md-7 ">
          <p class=' justify-content-center p-3 fs-2'>Cultivating the upcoming engineers through dynamic and extra curricular activities under student section
          </p>
        </div>
        <div class="col-md-5">
          <img src={about_img} style={{width: '100%'}} alt="illustration" />
        </div>  
      </div>
      <div class="row">
        <ul class='d-flex justify-content-center list-inline'>
          <li><a class='btn btn-dark p-3 m-3' href="#">Learn more</a></li>
          <li><a class='btn btn-dark p-3 m-3' href="#">Meet the team</a></li>
        </ul>
      </div>
    </div>
  </section>
  );
}
export default About;