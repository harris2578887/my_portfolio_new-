import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RevealSection from "../RevealSection";
import {
  profile,
  experience,
  skills,
  certifications,
  achievements,
  languages,
  competencies,
} from "../../data/profile";
import myImg from "../../Assets/avatar.png";

const skillEntries = Object.entries(skills);

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-bg" aria-hidden="true">
        <span className="about-bg-orb about-bg-orb-a" />
        <span className="about-bg-orb about-bg-orb-b" />
      </div>

      <Container className="about-container">
        <RevealSection>
          <Row className="align-items-center about-intro g-4">
            <Col md={6}>
              <p className="about-kicker">About</p>
              <h1 className="section-title">{profile.name}</h1>
              <p className="about-lead">{profile.summary}</p>
              <div className="about-meta-row">
                <span>{profile.title}</span>
                <span>{profile.location}</span>
              </div>
            </Col>
            <Col md={6} className="about-photo-col">
              <div className="about-circle-ring">
                <div className="about-circle">
                  <img
                    src={myImg}
                    alt={profile.name}
                    className="about-photo"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </RevealSection>

        {/* Professional Experience */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">
              Professional Experience
            </h2>
            <p className="section-lead">
              Four roles spanning government AI, generative AI products, freelance
              systems, and research internships.
            </p>
          </div>
        </RevealSection>

        <Row className="equal-grid g-4">
          {experience.map((job, index) => (
            <Col md={6} key={`${job.company}-${job.period}`}>
              <RevealSection delay={index * 70} className="h-100">
                <article className="about-card equal-card exp-card">
                  <div className="exp-card-header">
                    <div className="exp-card-left">
                      <h3 className="about-card-title">{job.role}</h3>
                      <p className="about-card-sub">{job.company}</p>
                    </div>
                    <div className="exp-card-right">
                      <span className="about-card-period">{job.period}</span>
                      <span className="about-card-loc">{job.location}</span>
                    </div>
                  </div>
                  <ul className="about-card-list">
                    {job.highlights.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </RevealSection>
            </Col>
          ))}
        </Row>

        {/* Education — directly under experience */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">Education</h2>
          </div>
        </RevealSection>
        <Row className="equal-grid g-4">
          <Col xs={12}>
            <RevealSection delay={60} className="h-100">
              <article className="about-card equal-card edu-card">
                <div className="exp-card-header">
                  <div className="exp-card-left">
                    <h3 className="about-card-title">
                      {profile.education.degree}
                    </h3>
                    <p className="about-card-sub">{profile.education.school}</p>
                  </div>
                  <div className="exp-card-right">
                    <span className="about-card-period">
                      {profile.education.period}
                    </span>
                    <span className="about-card-loc">Islamabad, Pakistan</span>
                  </div>
                </div>
              </article>
            </RevealSection>
          </Col>
        </Row>

        {/* Competencies — 4 equal */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">
              Core Competencies
            </h2>
          </div>
        </RevealSection>
        <Row className="equal-grid g-4">
          {competencies.map((c, index) => (
            <Col md={6} lg={3} key={c.title}>
              <RevealSection delay={index * 60} className="h-100">
                <article className="about-card equal-card competency-card">
                  <span className="about-card-index">0{index + 1}</span>
                  <h3 className="about-card-title">{c.title}</h3>
                  <p className="about-card-text">{c.text}</p>
                </article>
              </RevealSection>
            </Col>
          ))}
        </Row>

        {/* Skills — 6 equal */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">
              Skills & Stack
            </h2>
          </div>
        </RevealSection>
        <Row className="equal-grid g-4">
          {skillEntries.map(([category, list], index) => (
            <Col md={6} lg={4} key={category}>
              <RevealSection delay={(index % 3) * 70} className="h-100">
                <article className="about-card equal-card skill-card">
                  <h3 className="about-card-title">{category}</h3>
                  <p className="about-card-text">{list}</p>
                </article>
              </RevealSection>
            </Col>
          ))}
        </Row>

        {/* Certifications — 6 equal */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">Certifications</h2>
          </div>
        </RevealSection>
        <Row className="equal-grid g-4">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} key={cert}>
              <RevealSection delay={(index % 3) * 70} className="h-100">
                <article className="about-card equal-card cert-card">
                  <span className="about-card-index">0{index + 1}</span>
                  <h3 className="about-card-title cert-title">{cert}</h3>
                </article>
              </RevealSection>
            </Col>
          ))}
        </Row>

        {/* Achievements + Languages — equal pair */}
        <RevealSection delay={40}>
          <div className="about-section-head">
            <h2 className="section-title project-heading">
              Achievements & Languages
            </h2>
          </div>
        </RevealSection>
        <Row className="equal-grid g-4 about-bottom-grid">
          <Col md={6}>
            <RevealSection delay={60} className="h-100">
              <article className="about-card equal-card">
                <p className="about-card-kicker">Achievements</p>
                <ul className="about-card-list">
                  {achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          </Col>
          <Col md={6}>
            <RevealSection delay={100} className="h-100">
              <article className="about-card equal-card">
                <p className="about-card-kicker">Languages</p>
                <ul className="about-card-list">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <strong>{lang.name}</strong> — {lang.level}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
