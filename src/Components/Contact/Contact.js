import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button} from "react-bootstrap";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();
  console.log(e);

  emailjs.sendForm(
      "service_zbxw3ya",
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
        <Form.Group >
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"  name="name" required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Subject:</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" name="subject" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type Message Here"
            name="message"
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
