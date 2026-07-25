import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <p>{profile.name} · {profile.title}</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p>© {year} · Islamabad, Pakistan</p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
