import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Login from '../googleSignIn/signin';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  const phrases = [
    'there is no suprise',
    'froot loops are all the same flavor',
    'taxation is theft',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    alert(phrases[currentIndex]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  return (
    <Navbar
      bg='dark'
      expand='lg'
      className='py-5'
      variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto nav-link'>
            <Nav.Link
              className='suprise'
              href='#'
              onClick={handleClick}>
              Click For A Surprise
            </Nav.Link>
            <div className='space'></div>
          </Nav>
          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
