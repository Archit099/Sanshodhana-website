import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Contact = document.getElementById("contact-us");
const About = document.getElementById("about-us");
const Courses = document.getElementById("courses");
const Navigations = () => {

  const goHome = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Navbar variant="dark" sticky="top" style={{ backgroundColor: "#161616" }} expand="lg">
      <Navbar.Brand style={{ color: "white", fontWeight: "bolder", fontSize: "1.8rem", cursor: "pointer" }} onClick={goHome} ><img width="50" height="50" src="/assets/logo1922.svg" alt="logo" /> Sanshodhana</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Item style={{ paddingRight: "1.1rem", fontSize: "1.1rem", fontWeight: 600 }}>
            <Nav.Link onClick={goHome}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingRight: "1.1rem", fontSize: "1.1rem", fontWeight: 600 }}>
            <Nav.Link onClick={() => About.scrollIntoView()}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingRight: "1.1rem", fontSize: "1.1rem", fontWeight: 600 }}>
            <Nav.Link onClick={() => Contact.scrollIntoView()}>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingRight: "1.1rem", fontSize: "1.1rem", fontWeight: 600 }}>
            <Nav.Link onClick={() => Courses.scrollIntoView()}>Course</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigations;
