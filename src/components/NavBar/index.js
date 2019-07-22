import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';
import "./styles.css";

class NavBar extends Component{
render() {

    return (
      <div className="navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Andrew Osborn</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Nav>
            <Link to="about">About</Link>
            <Nav.Link href="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link href="contact">
              Contact
            </Nav.Link>
            <Nav.Link href="resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;

{/* <div>
            <body>

            <header id="masthead">
                <div class="container">
                <a href="index.html" id="logo">Andrew Osborn</a>
                <nav>
                    <a href="index.html">About</a>
                    <a href="portfolio.html">Portfolio</a>
                    <a href="contact.html">Contact</a>
                    <a href="assets/images/Andrew Osborn Resume.pdf">Resume</a>
                </nav>
                </div> */}
