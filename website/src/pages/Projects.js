// pages/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A web application that helps users track their daily tasks and manage their time effectively.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project-one"
    },
    {
      id: 2,
      title: "Project Two",
      description: "An e-commerce platform with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Express", "PostgreSQL", "Stripe API"],
      link: "https://github.com/yourusername/project-two"
    }
  ];

  return (
    <section>
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title mb-3">{project.title}</h3>
                <p className="card-text mb-3">{project.description}</p>
                <div className="mb-3">
                  <h4 className="h6 mb-2">Technologies:</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white border-top-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-primary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;