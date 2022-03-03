import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="logo" to="/">Math Magician</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#deets"><Link className="link-item" to="/">Home</Link></Nav.Link>
            <Nav.Link href="#deets"><Link className="link-item" to="/calculator">Calculator</Link></Nav.Link>
            <Nav.Link href="#deets"><Link className="link-item" to="/quote">Quote</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
