import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Sidebar() {
  return (
    <div>
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/dashboard" className="nav-links">
              Dashboard
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="add-student">
                <a className="nav-links" href="h">
                  <span>Add Students</span>
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to="/all-students">
                <a className="nav-links" href="h">
                  <span>All Students</span>
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Sidebar;
