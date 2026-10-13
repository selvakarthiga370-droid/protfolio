import React from "react";
function About_Task() {
  return (
    <>
      <style>{`.box{       
       width: 700px;
      padding: 20px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 2px 5px gray;
      }`

      }</style>
       <center>
      <div className="box">
        <h1>About Me</h1>
        <p>Get to know me better!</p>

        <div >
          <h2>Hello, I'm Selvakarthiga 👋</h2>

          <p>
            I am a third-year Information Technology student
            at Muthayammal Engineering College.
          </p>

          <p>
            I am interested in <strong>web technologies</strong>,
            React development, and cloud computing.
            I enjoy learning new technologies and building
            projects that solve real-world problems.
          </p>

          <h2>My Goal</h2>

          <p>
            My goal is to become a skilled IT professional,
            improve my technical knowledge, and build useful
            software applications.
          </p>

          <h2>My Interests</h2>

          <div>
            <span className="about-tag">Web Development</span>
            <span className="about-tag">React</span>
            <span className="about-tag">Cloud Computing</span>
            <span className="about-tag">Learning New Skills</span>
          </div>
        </div>
      </div>
      </center>
    </>
  );
}

export default About_Task;
