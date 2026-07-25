import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.png";
import Type from "./Type";
import { profile } from "../../data/profile";

function Home() {
  return (
    <section className="home-page">
      <Container fluid className="home-section" id="home">
        <div className="home-atmosphere" aria-hidden="true" />
        <Container className="home-content">
          <Row className="align-items-center justify-content-between home-hero-row g-4">
            <Col lg={6} className="home-header">
              <p className="home-location">{profile.location}</p>
              <h1 className="brand-name">{profile.name}</h1>
              <p className="home-designation">{profile.title}</p>
              <p className="home-headline">{profile.headline}</p>
              <div className="home-type">
                <Type />
              </div>
              <div className="home-cta">
                <Link to="/project" className="btn-primary-link">
                  View Projects
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-secondary-link"
                >
                  Contact Me
                </a>
              </div>
            </Col>
            <Col lg={5} className="home-hero-visual">
              <div className="hero-oval-ring">
                <div className="hero-oval">
                  <img
                    src={myImg}
                    alt={`${profile.name} professional headshot`}
                    className="hero-photo"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
