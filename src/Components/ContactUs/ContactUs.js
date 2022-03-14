import React from 'react'
import Airform from 'react-airform'

const ContactUs = () => {
    return (
        <div>
            <section>
    <h2 class='display-4 font-weight-light text-center my-3 py-3'>Contact Us</h2>
    <div class="container mb-3">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class='h-100'>
          <iframe
          
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8729486366774!2d73.87828531487882!3d18.534642687400794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f855581855%3A0x9bfc35605df36ec5!2sModern%20Education%20Society&#39;s%20College%20of%20Engineering%20(MESCOE)!5e0!3m2!1sen!2sin!4v1647261683298!5m2!1sen!2sin"
              width="400" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" title="map"></iframe>
          </div>
        </div>
        <div class="col-md-6 contact-form__wrapper p-5 order-lg-1">

          <Airform email="asmemescoe@gmail.com" class="contact-form form-validate" novalidate="novalidate">
            <div class="row">
              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label class="required-field" for="firstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" name="firstName" placeholder="John"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Doe"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label class="required-field" for="email">Email</label>
                  <input type="text" class="form-control" id="email" name="email" placeholder="abc@example.com"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" name="phone" placeholder="(+91) 1234540545"/>
                </div>
              </div>

              <div class="col-sm-12 mb-3">
                <div class="form-group">
                  <label class="required-field" for="message">How can we help?</label>
                  <textarea class="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                </div>
              </div>

              <div class="col-sm-12 mb-3 text-center">
                <button type="submit" name="submit" class="btn btn-success">Submit</button>
              </div>

            </div>
          </Airform>
        </div>
        {/* <!-- End Contact Form Wrapper --> */}
      </div>
    </div>
  </section>
        </div>
    )
}

export default ContactUs
