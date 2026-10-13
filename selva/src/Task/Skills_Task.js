
import React from 'react';
function Skills_Task() {
  const skills = [
    { name: 'HTML', icon: '🌐', level: 'Beginner' },
    { name: 'CSS', icon: '🎨', level: 'Beginner' },
    { name: 'JavaScript', icon: '⚡', level: 'Learning' },
    { name: 'React', icon: '⚛️', level: 'Learning' },
    { name: 'Java', icon: '☕', level: 'Learning' },
    { name: 'Salesforce', icon: '☁️', level: 'Learning' }
  ];

  return (
    <section>
      <style>{
        `.box{       
       width: 700px;
      padding: 10px;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 2px 5px gray;
      }`
      }</style>
      <center>
      <div className='box'>
        <p>MY TECHNICAL JOURNEY</p>

        <h1>
          My <span>Skills</span>
        </h1>

        <p>
          I am continuously learning and improving my skills.
        </p>

        <div>
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h2>{skill.name}</h2>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
      </center>
    </section>
  );
}

export default Skills_Task;
