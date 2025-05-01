import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTools } from "react-icons/fa";
import { FaLaptopCode, FaBook, FaMusic, FaGamepad } from 'react-icons/fa';

const About = () => {
  return (
    <section className="section-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">About Me</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <img 
              src="/about.jpg" 
              alt="Profile" 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: '80%' }}
            />
          </Col>
          <Col md={8}>
            <h3>Who Am I?</h3>
            <p className="lead">
              I'm a third-year BSIT student with a passion for web development, programming, and technology.
            </p>
            <p>
            I am currently pursuing my Bachelor's degree in Information Technology at University of Cabuyao, focusing on web technologies 
            and software development. I enjoy creating user-friendly applications and websites that solve real-world problems. My goal is 
            to graduate with strong technical skills and eventually work as a full-stack developer. I’ve gained hands-on experience 
            through academic projects, which have strengthened my understanding of both frontend and backend technologies. I’m also actively
            learning modern frameworks and tools to stay competitive in the ever-evolving tech industry.
            </p>
            <p>
            When I'm not coding or studying, I enjoy listening to music, playing video games, and staying updated with the latest 
            tech trends. I believe in continuous learning and am always looking to expand my knowledge. I often explore online tutorials, 
            watch tech-related videos, and read blogs to keep my skills sharp. Collaborating with peers on small projects also helps 
            me grow as a developer and stay motivated. I’m passionate about building a future where technology makes life easier, smarter, 
            and more connected.
            </p>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">My Skills</h3>
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                  <FaLaptopCode />
                </div>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  HTML, CSS, JavaScript, React, Bootstrap
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                  <FaBook />
                </div>
                <Card.Title>Programming</Card.Title>
                <Card.Text>
                  Java, C++, SQL
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                    <FaTools />
                </div>
                <Card.Title>Tools and Others</Card.Title>
                <Card.Text>
                  Github, Vs Code, Figma, Responsive Design
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                  <FaMusic />
                </div>
                <Card.Title>Hobbies</Card.Title>
                <Card.Text>
                    Music, Reading, Photography
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;