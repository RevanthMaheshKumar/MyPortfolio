import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image1.jpg";
import projImg2 from "../assets/img/image2.jpg";
import projImg3 from "../assets/img/image3.jpg";
import projImg4 from "../assets/img/image4.png";
import projImg5 from "../assets/img/image5.png";
import projImg6 from "../assets/img/image6.png";
import projImg7 from "../assets/img/image7.png";
import projImg8 from "../assets/img/image8.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Domino’s Mobile App Redesign",
      description: "Figma, User Research, Wireframing, Prototyping (2024). Led the redesign of Domino’s app, enhancing user experience through intuitive navigation, simplified ordering, and user feedback integration. Created wireframes and high-fidelity prototypes in Figma, driving usability testing and optimizing accessibility.",
      imgUrl: projImg4,
    },
    {
      title: "Collective Cause Web Application",
      description: "TypeScript, JavaScript, Node.js, React, Express.js, MongoDB (2024). Developed a web platform for fundraising campaigns with secure donation processing, real-time tracking, and user-friendly registration. Enhanced user experience and functionality with event management and receipt generation.",
      imgUrl: projImg5,
    },
    {
      title: "Restaurant Management System (RMS)",
      description: "SQL, MySQL, Stored Procedures, Views, Triggers (2023). Built a comprehensive system for customer management, order processing, and billing. Automated operations using stored procedures, views, and triggers for data accuracy and streamlined workflows.",
      imgUrl: projImg8,
    },
    {
      title: "Prediction of Gold Prices using Deep Learning Algorithms",
      description: "Python, MATLAB (2021). Developed a neural network-based gold price prediction system, optimizing real-time market data pipelines. Co-authored an IEEE publication on the project.",
      imgUrl: projImg6,
    },
    {
      title: "Smart Ads Using Raspberry Pi",
      description: "Raspberry Pi, PCA, Viola-Jones, MATLAB (2021). Designed an embedded system for real-time visitor behavior analysis using face recognition algorithms, integrating sensors and image processing to deliver marketing insights.",
      imgUrl: projImg1,
    },
    {
      title: "Marvel Fan Page",
      description: "HTML, CSS, JavaScript (2021). Designed and developed an interactive fan page with responsive design and animations, delivering a sleek user interface optimized for cross-device compatibility.",
      imgUrl: projImg3,
    },
    {
      title: "Snake 2.0",
      description: "C#, OpenGL, Visual Studio (2020). Developed a dynamic 2D Snake game with smooth animations, responsive controls, and enhanced visual effects, showcasing strong programming and graphical skills.",
      imgUrl: projImg2,
    },
    {
      title: "Parking Management System",
      description: "C#, .NET, Backend Development (2021). Automated parking fee calculations, integrating real-time vehicle data processing for intuitive and efficient parking management.",
      imgUrl: projImg7,
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                  Led and contributed to diverse projects including web applications, mobile app redesigns, and data-driven systems, focusing on enhancing user experience and system functionality.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
