import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './headers.css';

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar" fixed-top>
  <Navbar.Brand>
    <Link to = "/">
      LeadersChurch
      <img
      src="./images/logo_church.jpg"
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
          HOME
        </Link>       
      </Nav>
      <Nav>
        <Link to = "/about">
          About
        </Link>  
      </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavigationBar;
