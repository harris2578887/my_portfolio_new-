import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import RevealSection from "../RevealSection";
import { projects } from "../../data/profile";

import vetaiImg from "../../Assets/Projects/vetai.png";
import anprImg from "../../Assets/Projects/anpr.png";
import spectrumImg from "../../Assets/Projects/spectrum.png";
import syntheticImg from "../../Assets/Projects/synthetic.png";
import cancerImg from "../../Assets/Projects/cancer.png";
import sam3dImg from "../../Assets/Projects/sam3d.png";
import ragImg from "../../Assets/Projects/rag.png";
import summarizeImg from "../../Assets/Projects/summarize.png";
import inventoryImg from "../../Assets/Projects/inventory.png";

const imageMap = {
  vetai: vetaiImg,
  anpr: anprImg,
  spectrum: spectrumImg,
  synthetic: syntheticImg,
  cancer: cancerImg,
  sam3d: sam3dImg,
  rag: ragImg,
  summarize: summarizeImg,
  inventory: inventoryImg,
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <RevealSection>
          <div className="projects-header">
            <h1 className="section-title project-heading">
              Selected Projects
            </h1>
            <p className="section-lead">
              Production systems and edge AI builds across healthcare, security,
              finance, and education.
            </p>
          </div>
        </RevealSection>

        <Row className="projects-grid g-4">
          {projects.map((project, index) => (
            <Col xs={12} sm={6} lg={4} key={project.title} className="project-col">
              <RevealSection delay={(index % 3) * 80} className="h-100">
                <ProjectCard
                  imgPath={imageMap[project.image]}
                  title={project.title}
                  tag={project.tag}
                  stack={project.stack}
                  description={project.description}
                />
              </RevealSection>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
