import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../images/logo_church.jpg';

import './headers.css';

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar" fixed-top>
  <Navbar.Brand>
    <Link to = "/">
      Leaders Church
      <img
      src={ image }
      width="40"
      height="35"
      className="d-inline-block align-top"
      alt="not showing"
      />
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav ml-auto" id="header">
      <Nav>
        <Link to = "/">
          Home
        </Link>       
      </Nav>
      <Nav>
        <Link to = "/about">
          About
        </Link>  
      </Nav>
      <Nav>
        <Link to = "/contact">
          Contact
        </Link>  
      </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavigationBar;
