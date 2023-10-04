import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Kael from "../../../static/kael.png";
const Footer = () => {
    return (
        <Container fluid style={{ background:"black", }}>
        <Nav className="navigations" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/" className="custom-nav-link">
              <img src={Kael} alt="Kael" className="momiOni coin" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
    }

export default Footer;