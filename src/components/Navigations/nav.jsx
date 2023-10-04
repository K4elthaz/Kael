import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Kael from "../../../static/kael.png";
import "./nav.css";

const Navigation = () => {
  return (
    <Container fluid>
      <Nav className="navigations" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" className="custom-nav-link">
            <img src={Kael} alt="Kael" className="momiOni coin" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "yellow" }} href="/home">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "yellow" }} href="#projects">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "yellow" }} href="#hireme">
            Hire Me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Navigation;
