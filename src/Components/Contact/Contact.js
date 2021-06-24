import React from "react";
import "./Contact.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container id="Contact" fluid className="text-light">
      <h1 className="m-4 ">Contact Me(Not Live)</h1>

      <Form id="contactForm">
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>
        
        <Form.Group controlId="Message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" placeholder="Type Message Here" required/>
        </Form.Group>  

        <Button variant="primary" size="lg" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
