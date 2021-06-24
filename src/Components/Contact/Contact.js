import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_glil98q",
      e.target,
      "user_yqWY2bK4vSWhkIScjffVY"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Contact() {
  return (
    <Container id="Contact" fluid className="text-light">
      <h1 className="m-4 ">Contact Me</h1>

      <Form id="contactForm" onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type Message Here"
            required
          />
        </Form.Group>

        <Button variant="primary" size="lg" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
