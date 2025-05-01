import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-2">
      <Container>
        <Row className="text-center">
          <Col>
            <span>&copy; {new Date().getFullYear()} Obrey Monter. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;