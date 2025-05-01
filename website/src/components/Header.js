import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';  

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ paddingTop: '0.8rem', paddingBottom: '0.8rem' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">My Personal Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link-hover">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
