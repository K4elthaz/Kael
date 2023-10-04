import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bootstrap from "../../assets/icons8-bootstrap-48.png";
import Adobe from "../../assets/icons8-adobe-photoshop-48.png";
import Illustrator from "../../assets/icons8-adobe-xd-48.png";
import Figma from "../../assets/icons8-figma-48.png";
import Csharp from "../../assets/icons8-c-48 .png";
import CPlus from "../../assets/icons8-c-48.png";
import Canva from "../../assets/icons8-canva-48.png";
import Cascade from "../../assets/icons8-css-48.png";
import Django from "../../assets/django.png";
import Git from "../../assets/icons8-git-48.png";
import ExpressJs from "../../assets/icons8-express-js-48.png";
import HTML from "../../assets/icons8-html-48.png";
import NodeJS from "../../assets/icons8-node-js-48.png";
import MongoDB from "../../assets/icons8-mongodb-48.png";
import MySql from "../../assets/icons8-mysql-48.png";
import PHP from "../../assets/icons8-php-48.png";
import Python from "../../assets/icons8-python-48.png";
import ReactJS from "../../assets/icons8-react-48.png";
import Java from "../../assets/icons8-java-48.png";
import viteReact from "../../assets/icons8-vite-48.png";
import Tailwind from "../../assets/icons8-tailwind-css-48.png";
import Material from "../../assets/icons8-material-ui-48.png";
import Wordpress from "../../assets/icons8-wordpress-48.png";

const TechStack = () => {
  return (
    <Container fluid className="tech-stack mt-5">
      <Row>
        <Col className="techStack mt-5">
          <h2>Technologies Stack</h2>
          <img src={Bootstrap} className="social-link1" alt="tech stack" />
          <img src={Django} className="social-link1" alt="tech stack" />
          <img src={Cascade} className="social-link1" alt="tech stack" />
          <img src={HTML} className="social-link1" alt="tech stack" />
          <img src={Git} className="social-link1" alt="tech stack" />
          <img src={ExpressJs} className="social-link1" alt="tech stack" />
          <img src={NodeJS} className="social-link1" alt="tech stack" />
          <img src={MongoDB} className="social-link1" alt="tech stack" />
          <img src={MySql} className="social-link1" alt="tech stack" />
          <img src={PHP} className="social-link1" alt="tech stack" />
          <img src={Python} className="social-link1" alt="tech stack" />
          <img src={ReactJS} className="social-link1" alt="tech stack" />
          <img src={Java} className="social-link1" alt="tech stack" />
          <img src={viteReact} className="social-link1" alt="tech stack" />
          <img src={Tailwind} className="social-link1" alt="tech stack" />
          <img src={Material} className="social-link1" alt="tech stack" />
          <img src={Wordpress} className="social-link1" alt="tech stack" />
          <img src={Csharp} className="social-link1" alt="tech stack" />
          <img src={CPlus} className="social-link1" alt="tech stack" />
          <img src={Canva} className="social-link1" alt="tech stack" />
          <img src={Adobe} className="social-link1" alt="tech stack" />
          <img src={Illustrator} className="social-link1" alt="tech stack" />
          <img src={Figma} className="social-link1" alt="tech stack" />
        </Col>
      </Row>
    </Container>
  );
};

export default TechStack;
