import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Medical Management System',
      description: 'A web application for managing patient diagnosis. Built with HTML, CCS, and JavaScript.',
      image: '/MedicalSystem.png',
      technologies: ['HTML5', 'CCS3', 'JAVASCRIPT', 'PHP', 'MYSQL', 'BOOTSTRAP'],
      github: 'https://github.com/Jeamko23590/Task-Management.git',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product listings, shopping cart, and checkout functionality.',
      image: '/Ecommerce.png',
      technologies: ['React', 'Laravel', 'Bootstrap', 'CSS'],
      github: 'https://github.com/PJasper14/MidtermLabExam.git',
    },
    {
      id: 3,
      title: 'Business Management System',
      description: 'A web-based system built to support business operations including inventory, sales, and order management',
      image: 'TsonggaySystem.png',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'MYSQL'],
      github: 'https://github.com/Nixie-Para-unda/Tsonggay-System.git',
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'My personal portfolio website (this website) built with React and Bootstrap, hosted on GitHub and deployed with Vercel.',
      image: 'website.png',
      technologies: ['React', 'React Router', 'Bootstrap', 'GitHub', 'Vercel'],
      github: 'https://github.com/monterobrey/PersonalWebsite.git',
    }
  ];

  return (
    <section className="section-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Projects</h2>
          </Col>
        </Row>
        
        <Row>
          {projects.map(project => (
            <Col lg={6} className="mb-4" key={project.id}>
              <Card className="project-card border-0 shadow-sm h-100">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="badge bg-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex">
                    <Button 
                      variant="dark" 
                      href={project.github} 
                      target="_blank" 
                      className="me-2"
                    >
                      <FaGithub className="me-2" />
                      Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;