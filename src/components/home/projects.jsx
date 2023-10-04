import React, {useState,useEffect} from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./mainPage.css";

const Projects = () => {
    
  const projects = [
    {
      title: "MERN Stack",
      description:
        "It is a project that I made using the MERN stack. It is a simple CRUD application that allows users to create, read, update, and delete notes. It is a simple project that I made to learn the MERN stack.",
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
    },
    {
      title: "YOLO Integration",
      description:
        "Is is a project that I made using the YOLO algorithm. It is a simple project that I made to learn how to integrate YOLO into a mobile application which leads to have 4 commission projects.",
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
    },
    {
      title: "Rethink DB Integration",
      description:
        "It is a PHP job application Project where i need to create simple auth and crud web application",
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
    },
    {
      title: "COOP Project",
      description:
        "It is a simple Bank Viewing System that I made using PHP it is a test project from a government facility.",
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
    },
    {
      title: "Chadix.AI",
      description:
        "I am one of the pioneer developer of an SEO Tool where we use different kind of AI to create a content for a website. I'am one of Frontend developer of the project also do backend stuff like creating a model using django and integrate it in react.",
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
    },
    // Add more project objects as needed
  ];
  const [isInViewport, setIsInViewport] = useState(Array(projects.length).fill(false));

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      projects.forEach((projects, index) => {
        const element = document.getElementById(`project-${index}`);
        if (element && isElementInViewport(element) && !isInViewport[index]) {
          setIsInViewport((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    // Add scroll event listener to check if elements are in the viewport
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInViewport, projects]);

  return (
    <Container fluid style={{minHeight:"60vh", marginTop: "100px" }}>
      <h1 className="description center mt-5">My Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <div
            key={index}
            id={`project-${index}`}
            className={`proj pointer ${isInViewport[index] ? "proj-fade-in" : ""}`}
          >
            <div className="align">
              <span className={project.colors.red}></span>
              <span className={project.colors.yellow}></span>
              <span className={project.colors.green}></span>
            </div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
