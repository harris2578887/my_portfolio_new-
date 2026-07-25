import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Muhammad_Haris_Ali.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { profile } from "../../data/profile";

// Local worker — no CDN delay
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = width > 786 ? 1.45 : 0.58;

  return (
    <Container fluid className="resume-section">
      <h1 className="section-title project-heading text-center">
        Resume — {profile.name}
      </h1>

      <Row className="justify-content-center resume-actions">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="resume-download-btn"
          download="Muhammad_Haris_Ali.pdf"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document
          file={pdf}
          loading={null}
          error={
            <p className="resume-fallback">
              Preview unavailable.{" "}
              <a href={pdf} download="Muhammad_Haris_Ali.pdf">
                Download CV
              </a>
            </p>
          }
          className="d-flex justify-content-center"
        >
          <Page
            pageNumber={1}
            scale={scale}
            loading={null}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Row>

      <Row className="justify-content-center resume-actions">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="resume-download-btn"
          download="Muhammad_Haris_Ali.pdf"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
