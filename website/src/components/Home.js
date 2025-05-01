import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
        <div className="hero-section">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col md={6} className="text-center mb-4 mb-md-0">
                    <img 
                        src="/phoyo.jpg" 
                        alt="Profile" 
                        className="img-fluid rounded-circle shadow" 
                        style={{ maxWidth: '250px' }}
                    />
                    </Col>
                    <Col md={6}>
                    <h1 className="display-4 fw-bold">Hello, I'm Obrey Monter</h1>
                    <p className="lead">BSIT Student | Aspiring Web Developer | Tech Learner</p>
                    <p className="mb-4">
                        Welcome to my student portfolio! I'm currently studying Information Technology and building projects to grow my skills in web development.
                    </p>
                    <div className="d-flex gap-2">
                        <Button as={Link} to="/projects" variant="light" size="m">
                        View Projects
                        </Button>
                        <Button as={Link} to="/contact" variant="outline-light" size="m">
                        Contact Me
                        </Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
      
        <Container className="py-5">
            <Row className="justify-content-center text-center">
                <Col lg={8}>
                <h2 className="display-4 mb-4">What I Do</h2>
                <p className="lead text-muted">
                    I'm a 3rd year BSIT Student, I'm passionate about learning modern web development technologies like React.js. I enjoy creating clean, responsive, and functional interfaces as part of my academic journey and personal projects.
                </p>
                </Col>
            </Row>

            <Row className="mt-5 text-center">
                <Col md={4} className="mb-4">
                    <div className="d-flex flex-column p-4 bg-light rounded shadow-lg hover-shadow h-100">
                    <h3 className="h5 mb-3 font-weight-bold">Web Projects</h3>
                    <p className="text-muted">
                        Building web-based apps and websites using HTML, CSS, JavaScript, and React as I practice my coding skills.
                    </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="d-flex flex-column p-4 bg-light rounded shadow-lg hover-shadow h-100">
                    <h3 className="h5 mb-3 font-weight-bold">UI/UX Exploration</h3>
                    <p className="text-muted">
                        Designing layouts and interfaces for projects while learning principles of usability and visual design.
                    </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="d-flex flex-column p-4 bg-light rounded shadow-lg hover-shadow h-100">
                    <h3 className="h5 mb-3 font-weight-bold">Learning & Growth</h3>
                    <p className="text-muted">
                        Exploring new technologies, solving coding challenges, and continuously improving as a future developer.
                    </p>
                    </div>
                </Col>
                </Row>
        </Container>

    </div>
  );
}

export default Home;
