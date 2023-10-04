import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mainPage.css";
import Oni from "../../../static/prof.png";
import Navigation from "../Navigations/nav";
import Card from "./card";
import TechStack from "./techStack";
import Projects from "./projects";
import Footer from "./footer";

const LandingPage = () => {
  const headers = ["I'm Jeremy Alcantara", "Full Stack Developer"];
  const description =
    "I am a skilled full-stack web developer with a passion for creating dynamic and user-friendly web applications. With expertise in both front-end and back-end technologies, I bring ideas to life by crafting interactive websites and web solutions. My commitment to clean code, attention to detail, and continuous learning ensures that I deliver high-quality and innovative digital experiences for users.";

  const [firstHeader, setFirstHeader] = useState("");
  const [secondHeader, setSecondHeader] = useState("");
  const [headerIndex, setHeaderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionInViewport, setDescriptionInViewport] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (showDescription) {
      setDescriptionVisible(true);
      setCardVisible(true);
      setProjectsVisible(true);
      setFooterVisible(true);
    }
  }, [showDescription]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (headerIndex === 0) {
        setFirstHeader(
          (prevText) => prevText + headers[headerIndex][charIndex]
        );
      } else {
        setSecondHeader(
          (prevText) => prevText + headers[headerIndex][charIndex]
        );
      }
      setCharIndex((prevCharIndex) => prevCharIndex + 1);
    }, 100);

    if (charIndex === headers[headerIndex].length) {
      clearInterval(interval);

      if (headerIndex === headers.length - 1) {
        setShowDescription(true);
      } else {
        setHeaderIndex((prevHeaderIndex) => prevHeaderIndex + 1);
        setCharIndex(0);
      }
    }

    return () => clearInterval(interval);
  }, [charIndex, headerIndex, headers]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("description-section");
      if (element && isElementInViewport(element)) {
        setDescriptionInViewport(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container fluid className="vheight">
        <Navigation />
        <Row className="d-none d-md-flex">
          <Col>
            <div
              className={`mt-5 description ${
                descriptionInViewport ? "fade-in" : ""
              }`}
              id="description-section"
              style={{ marginBottom: "120px" }}
            >
              <h2 fw-bold>{firstHeader}</h2>
              <h1>{secondHeader}</h1>
              {showDescription && (
                <h4
                  className={`mt-4 fade-in-element ${
                    descriptionVisible ? "show" : ""
                  }`}
                >
                  {description} <TechStack />
                </h4>
              )}
            </div>
          </Col>
          {showDescription && (
            <Col className={`fade-in-element ${cardVisible ? "show" : ""}`}>
              <Card />
            </Col>
          )}
          <Row>
            <Col>
              {showDescription && (
                <div
                  className={`fade-in-element ${projectsVisible ? "show" : ""}`}
                >
                  <hr className="mt-5"></hr>
                  <Projects />
                </div>
              )}
            </Col>
          </Row>
        </Row>

        {/* Mobile layout */}
        <Row className="d-md-none">
          <Col>
            <Card />
            <div
              className={`mt-5 description ${
                descriptionInViewport ? "fade-in" : ""
              }`}
              id="description-section"
              style={{ marginBottom: "120px" }}
            >
              <h2 fw-bold>{firstHeader}</h2>
              <h1>{secondHeader}</h1>
              {showDescription && (
                <h4
                  className={`mt-4 fade-in-element ${
                    descriptionVisible ? "show" : ""
                  }`}
                >
                  {description} <TechStack />
                </h4>
              )}
            </div>
          </Col>
          <Row>
            <Col>
              {showDescription && (
                <div
                  className={`fade-in-element ${projectsVisible ? "show" : ""}`}
                >
                  <hr className="mt-5"></hr>
                  <Projects />
                </div>
              )}
            </Col>
          </Row>
        </Row>
        {showDescription && (
          <div className={`fade-in-element ${footerVisible ? "show" : ""}`}>
            <Footer />
          </div>
        )}
      </Container>
    </div>
  );
};

export default LandingPage;
