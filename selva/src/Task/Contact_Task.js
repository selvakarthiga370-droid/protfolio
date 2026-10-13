import React from "react";
function Contact_Task() {
  return (
    <>
      <style>{`.box{       
       width: 300px;
      padding: 10px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 2px 5px gray;
      }`}
      </style>
     <center>
      <div className="box">
        <h1>Contact Me</h1>
        <p>Let's connect and work together!</p>

        <div >
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href="mailto:sselvakarthiga@gmail.com">
              sselvakarthiga@gmail.com
            </a>
          </div>

          <div >
            <h3>📱 Phone</h3>
            <a href="tel:9789225623">
              9789225623
            </a>
          </div>

          <div >
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit my LinkedIn
            </a>
          </div>

          <div >
            <h3>📍 Location</h3>
            <p>Salem, Tamil Nadu</p>
          </div>
        </div>
      </div>
      </center>
    </>
  );
}

export default Contact_Task;
