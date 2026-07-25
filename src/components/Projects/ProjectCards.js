import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-media">
        <img src={props.imgPath} alt="" />
      </div>
      <Card.Body className="project-body">
        {props.tag && <span className="project-tag">{props.tag}</span>}
        <Card.Title className="project-title">{props.title}</Card.Title>
        {props.stack && <p className="project-stack">{props.stack}</p>}
        <Card.Text className="project-desc">{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
