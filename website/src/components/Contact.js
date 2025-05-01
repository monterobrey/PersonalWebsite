import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Contact = () => {
  return (
    <section className="section-container py-5">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="mb-5 text-left"
        >
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              <h3 className="mb-4">Get In Touch</h3>
              <p className="mb-4">
                I'm always open to new opportunities, collaborations, and interesting projects.
                Feel free to reach out using the contact form or through any of the channels below.
              </p>
            </motion.div>

            {[{
              icon: <FaEnvelope className="text-primary me-3" style={{ fontSize: '1.5rem' }} />,
              title: "Email",
              content: "monterobrey85@gmail.com"
            }, {
              icon: <FaGithub className="text-primary me-3" style={{ fontSize: '1.5rem' }} />,
              title: "GitHub",
              content: "github.com/monterobrey"
            }, {
              icon: <FaMapMarkerAlt className="text-primary me-3" style={{ fontSize: '1.5rem' }} />,
              title: "Location",
              content: "Brgy. Mamatid, Cabuyao City, Laguna 4025"
            }].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={i + 2}
              >
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      {item.icon}
                      <div>
                        <h5 className="mb-0">{item.title}</h5>
                        <p className="mb-0">{item.content}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </Col>

          <Col lg={7}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={5}
            >
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
