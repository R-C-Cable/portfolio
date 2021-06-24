import React from "react";
import {FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Header.css"

import {
  Navbar,
  Button,
  Nav,
} from "react-bootstrap";

function Header() {
  return (
    <Navbar  id="Header" bg="dark text-dark" variant="dark" expand="lg">
      <Navbar.Brand href="#top">Robert's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll>

          <Nav.Link href="#ProjectSection">
            Projects
          </Nav.Link>
          <Nav.Link href="#Contact">
            Contact
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-end">
 
              <Button
                className="mr-1"
                href="https://www.linkedin.com/in/robert-cable-b88593ab/"
                target="_blank"
                variant="outline-light"
                size="lg"
              > 
                <FaLinkedin/>
              </Button>

              <Button
                className="mr-1"
                target="_blank"
                href="https://github.com/R-C-Cable"
                variant="outline-light"
                size="lg"
              >
                <FaGithub/>
              </Button>

              <Button
                className="mr-1"
                href="#"
                target="_blank"
                variant="outline-light"
                size="lg"
              >
                CV
              </Button>
        </div>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;