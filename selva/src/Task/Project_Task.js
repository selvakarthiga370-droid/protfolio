import React from 'react';
function Project_Task() {
  const projects = [
    {
      number: '01',
      icon: '🍳',
      title: 'Recipes Realm',
      category: 'WEB DEVELOPMENT',
      description:
        'A recipe website designed to help users explore delicious recipes and discover affordable food options.',
      technologies: ['React', 'CSS', 'JavaScript']
    },
    {
      number: '02',
      icon: '📚',
      title: 'Smart Library Management',
      category: 'CRM PROJECT',
      description:
        'A smart library system that helps users search for books, find shelf locations and access e-books easily.',
      technologies: ['CRM', 'Web Technology']
    },
    {
      number: '03',
      icon: '🛡️',
      title: 'Gas Leakage Detection',
      category: 'IOT PROJECT',
      description:
        'An IoT-based system designed to detect gas leakage and alert people to help improve safety.',
      technologies: ['Arduino', 'MQ-2 Sensor', 'IoT']
    }
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
      <div >
      <p>WHAT I'VE BEEN BUILDING</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p>
          Here are some projects I have worked on and explored.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <article  key={project.number}>
            <div className="project-top">
              <span className="project-icon">{project.icon}</span>
              <span className="project-number">{project.number}</span>
            </div>

            <p >{project.category}</p>

            <h2>{project.title}</h2>

            <p >
              {project.description}
            </p>

            <div>
              {project.technologies.map((tech) => (
                <span  key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      </div>
      </center>
    </section>
  );
}

export default Project_Task;
