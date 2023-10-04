import React from "react";
import "./effects.css";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Oni from "../../../static/prof.png";


const CodeLoader = () => {
  return (
    <Container fluid className="center vheight">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${Oni})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          opacity: 0.1,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
      <NavLink to="/home" className="nav-link">
        <div className="code-loader pointer">
          <span>{`{ Welcome }`}</span>
          <h1 className="center pointer">
            <span>{"Press to Start"}</span>
          </h1>
        </div>
      </NavLink>
    </Container>
  );
};

export default CodeLoader;
