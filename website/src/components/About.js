import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTools, FaLaptopCode, FaBook, FaMusic } from "react-icons/fa";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.img 
              src="/about.jpg" 
              alt="Profile" 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: '80%' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <motion.h3 
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Skills
            </motion.h3>
          </Col>
        </Row>
        
        <Row className="text-center align-items-stretch">
          {[
            { icon: <FaLaptopCode />, title: "Web Development", text: "HTML, CSS, JavaScript, React, Bootstrap" },
            { icon: <FaBook />, title: "Programming", text: "Java, C++, SQL" },
            { icon: <FaTools />, title: "Tools and Others", text: "Github, Vs Code, Figma, Responsive Design" },
            { icon: <FaMusic />, title: "Hobbies", text: "Music, Reading, Photography" }
          ].map((skill, index) => (
            <Col md={3} sm={6} className="mb-4 d-flex" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-100"
              >
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
                        {skill.icon}
                      </div>
                      <Card.Title>{skill.title}</Card.Title>
                      <Card.Text>{skill.text}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
