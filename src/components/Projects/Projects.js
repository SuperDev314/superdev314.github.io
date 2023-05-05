import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.png";
import arcteryx from "../../Assets/Projects/arcteryx.png";
import retromagaz from "../../Assets/Projects/retromagaz.png";
import markup from "../../Assets/Projects/markup.png";
import jennywulac from "../../Assets/Projects/jennywulac.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={markup}
              isBlog={false}
              title="Best Gaming"
              description="Personal Chat Room or Workspace to share resources and hangout with friends 
                build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, 
                image sharing as well as supports reactions on messages."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://buildredux.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content 
                from makdown files and renders it using Next.js. Supports dark mode and easy to write 
                blogs using markdown."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retromagaz}
              isBlog={false}
              title="Game Consoles"
              description="Using Laravel, I designed this site to be responsive and optimized for a variety of devices including desktops, tablets and phones.
                In addition, in terms of design and functionality, it is configured to be efficient and user-friendly, optimized for the community.
                That's why this site is very popular, especially among children."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://retromagaz.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Hype Game"
              description="Hype games is a website that uses AngularJS as its front-end development framework. It is designed to showcase new and upcoming games across various platforms. As Hype.games is a website that showcases a large amount of data and multimedia content, I used AngularJS to easily organize and manage this content in a scalable way."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://hype.games/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jennywulac}
              isBlog={false}
              title="Shop 3D Printed Fine Jewelry"
              description="I made this Jewel Site even more enchanting and user-friendly with Core.js and Shopify.
                Explore our diverse collection of rings, earrings, necklaces, diamond rings and more in a variety of 3D printed materials.
                As you can see, I made this website reflect the brand's style with soft pastel colors and elegant typography."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://jennywulace.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcteryx}
              isBlog={false}
              title="Outdoor Clothing"
              description="I have designed this website using MERN Stack & Next.js & PHP to showcase Arcteryx's products and to provide customers with an easy-to-use online shopping experience.
                I've also put a lot of effort into optimization so that customers can easily discover and purchase products online without delays that meet their needs."
              ghLink="https://github.com/SuperDev314"
              demoLink="https://arcteryx.com/fi/en/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
