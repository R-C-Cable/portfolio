import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectSection.css";
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

const androidProjects = [
  {
    src: "https://user-images.githubusercontent.com/77639928/258609420-31512e6d-a8b1-4453-86c7-b746fb0456d5.png",
    title: "Denver Volunteer Connect",
    description:
      "Native Android App that allows older adults that are seeking chore services to request help from volunteers, and for the volunteers to accept these requests. \n Written in Java, using MVVM architecture, Firebase for Google Auth and as a Database.",
    sourceCodeHref: "https://github.com/R-C-Cable/DenverVolunteerConnect",
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
    src: "https://user-images.githubusercontent.com/77639928/125139993-ce106d80-e0ce-11eb-84e4-c28ba9ad48e1.png",
    title: "CS400 Data Structure and Algorithms Final Project",
    description:
      "This program takes command line arguments, creates Person objects, inputs them into a programmer defined queue, sorts them using a programmer defined recursive Quick Sort algorithm,  and uses Comparators to sort them in more than one way.",
    sourceCodeHref: "https://github.com/R-C-Cable/CS400-Final-Project",
  },
  {
    src: "https://user-images.githubusercontent.com/77639928/125139589-06637c00-e0ce-11eb-869d-a7ca20e4bcdc.png",
    title: "CSC450 Programming III Final Project",
    description:
      "This is a simple concurrent program in Java. It simply passes a counter method with a starting and ending integer to the defined thread, MyThread. Then MyThread runs the counter method that validates the parameters, counts from the starting to ending integer, and then it repeats this in the opposite direction.",
    sourceCodeHref: "https://github.com/R-C-Cable/CSC450_Final_Project",
  },
  {
    src: "https://user-images.githubusercontent.com/77639928/125139812-7540d500-e0ce-11eb-82f5-40f16ed526d9.png",
    title: "CSC375 Programing II Final Project",
    description:
      "This program asks the user for input, validates the input, and then instantiates student objects with the input. It stores them in a LinkedList, and then uses a programer defined Comparator to sort the student objects by name. Finally, it uses the programer defined toString method to output the objects to a file in a predictable manner.",
    sourceCodeHref: "https://github.com/R-C-Cable/CSC375-Final-Project",
  },
];

function ProjectCard(props) {
  return (
    <Col sm>
      <Card id="ProjectCard" style={{ width: "95%" }}>
        <Card.Img id="ProjectCardImg" variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {props.deployHref && (
            <Button
              className="m-1"
              target="_blank"
              variant="primary"
              href={props.deployHref}
            >
              Deployed
            </Button>
          )}
          <Button
            className="m-1"
            target="_blank"
            variant="primary"
            href={props.sourceCodeHref}
          >
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
            <h1 className="mb-4">Android Projects</h1>
      <Row>
        {androidProjects.map((projects) => {
          return <ProjectCard {...projects} />;
        })}
      </Row>
      <h1 className="m-4">Old Java Projects</h1>
      <Row>
        {javaProjects.map((projects) => {
          return <ProjectCard {...projects} />;
        })}
      </Row>
    </Container>
  );
}

export default ProjectSection;
