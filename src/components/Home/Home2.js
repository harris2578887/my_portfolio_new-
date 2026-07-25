import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import RevealSection from "../RevealSection";
import { profile } from "../../data/profile";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="intro">
      <Container>
        <Row className="align-items-start">
          <Col lg={8} className="home-about-description">
            <RevealSection delay={40}>
              <h2 className="section-title">
                Professional Profile
              </h2>
              <p className="home-about-body">{profile.summary}</p>
            </RevealSection>
          </Col>
          <Col lg={4} className="contact-panel-wrap">
            <RevealSection delay={140}>
              <div className="contact-panel">
                <h3 className="contact-panel-title">Connect</h3>
                <ul className="contact-list">
                  <li>
                    <AiOutlineMail />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <AiOutlinePhone />
                    <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                      {profile.phone}
                    </a>
                  </li>
                  <li>
                    <HiOutlineLocationMarker />
                    <span>{profile.location}</span>
                  </li>
                  <li>
                    <FaLinkedinIn />
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/muhammad-haris-ali
                    </a>
                  </li>
                </ul>
              </div>
            </RevealSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
