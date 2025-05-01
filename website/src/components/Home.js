import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="home-container">
        <motion.div 
            className="hero-section"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col md={6} className="text-center mb-4 mb-md-0">
                        <motion.img 
                            src="/phoyo.jpg" 
                            alt="Profile" 
                            className="img-fluid rounded-circle shadow" 
                            style={{ maxWidth: '250px' }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
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
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>

        <Container className="py-5">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h2 className="display-4 mb-4">What I Do</h2>
                        <p className="lead text-muted">
                            I'm a 3rd year BSIT Student, I'm passionate about learning modern web development technologies like React.js. I enjoy creating clean, responsive, and functional interfaces as part of my academic journey and personal projects.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 text-center">
                    {["Web Projects", "UI/UX Exploration", "Learning & Growth"].map((title, i) => (
                        <Col md={4} className="mb-4" key={i}>
                            <motion.div 
                                className="d-flex flex-column p-4 bg-light rounded shadow-lg h-100"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <h3 className="h5 mb-3 font-weight-bold">{title}</h3>
                                <p className="text-muted">
                                    {i === 0 && "Building web-based apps and websites using HTML, CSS, JavaScript, and React as I practice my coding skills."}
                                    {i === 1 && "Designing layouts and interfaces for projects while learning principles of usability and visual design."}
                                    {i === 2 && "Exploring new technologies, solving coding challenges, and continuously improving as a future developer."}
                                </p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </Container>
    </div>
  );
}

export default Home;
