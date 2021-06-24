import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projectsInfo = [
  {
    src: "https://dummyimage.com/300X300/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
  {
    src: "https://dummyimage.com/300X300/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
  {
    src: "https://dummyimage.com/300X300/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
];

function ProjectCard(props) {
  return (
    <Col sm>
    <Card style={{ width: "95%", margin: "auto" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button className="m-1" target="_blank" variant="primary" href={props.deployHref}>
          Deployed
        </Button>
        <Button className="m-1" target="_blank" variant="primary" href={props.sourceCodeHref}>
          Source Code
        </Button>
      </Card.Footer>
    </Card>
    </Col>
    
  );
}

function ProjectSection() {
  return (
    <Container id="ProjectSection">
      <h1 className="mb-4">Projects</h1>
      <Row>
        {projectsInfo.slice(0,3).map((projects) => {
          return <ProjectCard {...projects}/>;
        })}
      </Row>
    </Container>
  );
}

export default ProjectSection;
