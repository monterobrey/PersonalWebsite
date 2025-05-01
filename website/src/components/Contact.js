import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Contact Me</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <h3 className="mb-4">Get In Touch</h3>
            <p className="mb-4">
              I'm always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out using the contact form or through any of the channels below.
            </p>
            
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="mb-0">Email</h5>
                    <p className="mb-0">monterobrey85@gmail.com</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGithub className="text-primary me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="mb-0">GitHub</h5>
                    <p className="mb-0">github.com/monterobrey</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="text-primary me-3" style={{ fontSize: '1.5rem' }} />
                  <div>
                    <h5 className="mb-0">Location</h5>
                    <p className="mb-0">Brgy. Mamatid, Cabuyao City, Laguna 4025</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send Me a Message</h3>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;