import React from 'react';
import './contact.css';
const Contact = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-img">
              <img src="https://i.ibb.co/ZVmCGyL/ssss.jpg" alt="" />
            </div>
            <div className="chhagol my-5 text-right">
              <p>Md Shakil Ahmed Rana</p>
              <p>Batch: 48D</p>
              <p>01400395350</p>
              <p>ahmedshakil1021@gmail.com</p>
              <p>Department Of CSE</p>
              <p>Prime University</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-img">
              <img src="https://i.ibb.co/HDV30Pj/moni.jpg" alt="" />
            </div>
            <div className="chhagol my-5 text-left">
              <p>Marzia Akter Moni</p>
              <p>Batch: 48D</p>
              <p>Department Of CSE</p>
              <p>Prime University</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;


