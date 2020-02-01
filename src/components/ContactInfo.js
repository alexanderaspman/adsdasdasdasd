import React from 'react'
import plane from '../images/paper-planer.svg'
import linkedin from '../images/linkedin.svg'
import phone from '../images/phone.svg'


const ContactInfo = () => <section className="page-section" id="contact">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8 text-center">
      <h2 className="mt-0">Need a frontend developer, well your in luck!</h2>
      <hr className="divider my-4"/>
      <p className="text-muted mb-5">Call me on my phone or email listed here, when you ready to start our next project!</p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
    <div className="contactInfo">

    <img src={phone} className="contactInfo"/>
    </div>
      <div>+46 (0) 73 22 039 24</div>
    </div>
    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
      <div className="contactInfo"><a href='https://www.linkedin.com/in/alexanderaspman/'> 
    <img src={linkedin} className="contactInfo"/>
    </a>
    </div>
      <div>Linkedin</div> 
    </div>
    <div className="col-lg-4 mr-auto text-center">
    <div className="contactInfo">

      <img src={plane} className="contactInfo"/>
      </div>
      <a className="d-block" href="mail-to:aspmanalexander@gmail.com">aspmanalexander@gmail.com</a>
    </div>
  </div>
</div>
</section>;
export default ContactInfo