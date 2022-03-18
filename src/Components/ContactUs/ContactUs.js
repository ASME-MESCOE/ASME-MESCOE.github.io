import React from 'react'
import Airform from 'react-airform'

const ContactUs = () => {
    return (
        <div>
            <section>
    <h2 className='display-4 font-weight-light text-center my-3 py-3'>Contact Us</h2>
    <div className="container mb-3">
      <div className="row mt-4">
        <div className="col-md-6">
          <div className='h-100'>
          <iframe

              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8729486366774!2d73.87828531487882!3d18.534642687400794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f855581855%3A0x9bfc35605df36ec5!2sModern%20Education%20Society&#39;s%20College%20of%20Engineering%20(MESCOE)!5e0!3m2!1sen!2sin!4v1647261683298!5m2!1sen!2sin"
              width="400" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" title="map"></iframe>
          </div>
        </div>
        <div className="col-md-6 contact-form__wrapper p-5 order-lg-1">

          <Airform email="asme@mescoepune.org" className="contact-form form-validate" novalidate="novalidate">
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="required-field" for="firstName">First Name</label>
                  <input type="text" className="form-control form-control-lg" id="firstName" name="firstName" placeholder="John"/>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" className="form-control form-control-lg" id="lastName" name="lastName" placeholder="Doe"/>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="required-field" for="email">Email</label>
                  <input type="text" className="form-control form-control-lg" id="email" name="email" placeholder="abc@example.com"/>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" className="form-control form-control-lg" id="phone" name="phone" placeholder="(+91) 1234540545"/>
                </div>
              </div>

              <div className="col-sm-12 mb-3">
                <div className="form-group">
                  <label className="required-field" for="message">How can we help?</label>
                  <textarea className="form-control form-control-lg" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                </div>
              </div>

              <div className="col-sm-12 mb-3 text-center">
                <button type="submit" name="submit" className="btn btn-success">Submit</button>
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
