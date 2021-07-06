import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectSection.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const frontEndProjects = [
  {
    src: "https://dummyimage.com/600X600/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
  {
    src: "https://dummyimage.com/600X600/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
  {
    src: "https://dummyimage.com/600X600/a6a6a6/000000&text=placeHolderImg",
    title: "Project Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    deployHref: "#",
    sourceCodeHref: "#",
  },
];

const javaProjects = [
  {
    src: "https://user-images.githubusercontent.com/77639928/119536431-523caa80-bd46-11eb-85e4-be38a919231e.png",
    title: "CS400 Data Structure and Algorithms Final Project",
    description:
      "This program: -Takes command line arguments. -Creates Person objects. -Inputs them into a programmer defined Queue. -Sorts them using a programmer defined recursive Quick Sort algorithm. -Uses Comparators to sort them in more than one way.",
    sourceCodeHref: "https://github.com/R-C-Cable/CS400-Final-Project",
  },
  {
    src: "https://user-images.githubusercontent.com/77639928/124301903-b3158a80-db1d-11eb-8a42-0815a3c2d5dd.png",
    title: "CSC450 Programming III Final Project",
    description:
      "This is a simple concurrent program in Java. It simply passes a counter method with a starting and ending integer to the defined thread, MyThread. Then MyThread runs the counter method that validates the parameters, counts from the starting to ending integer, and then it repeats this in the opposite direction.",
    sourceCodeHref: "https://github.com/R-C-Cable/CSC450_Final_Project",
  },
  {
    src: "https://user-images.githubusercontent.com/77639928/124299115-4a78de80-db1a-11eb-955b-308a80057673.png",
    title: "CSC375 Programing II Final Project",
    description:
      "This program asks the user for input, validates the input, and then instantiates student objects with the input. It stores them in a LinkedList, and then uses a programer defined Comparator to sort the student objects by name. Finally, it uses the programer defined toString method to output the objects to a file in a predictable manner.",
    sourceCodeHref: "https://github.com/R-C-Cable/CSC375-Final-Project",
  },
];


function ProjectCard(props) {
  return (
    <Col sm >
    <Card id="ProjectCard"  style={{ width: "95%" , margin: "auto" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        {props.deployHref && <Button className="m-1" target="_blank" variant="primary" href={props.deployHref}>
          Deployed
        </Button>}
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
      <h1 className="mb-4">Web Development Project</h1>
      <Row>
        {frontEndProjects.map((projects) => {
          return <ProjectCard {...projects}/>;
        })}
      </Row>
       <h1 className="m-4">Java Projects</h1>
      <Row>
        {javaProjects.map((projects) => {
          return <ProjectCard {...projects}/>;
        })}
      </Row>
    </Container>
  );
}

export default ProjectSection;
