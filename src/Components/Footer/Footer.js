import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import "./Footer.css"

export default function Footer() {
  return (
    <Container fluid className="Footer d-block bg-dark">
      <Row className="d-grid gap-3 text-center">
        <Col sm className="m-3">
          <Button
          href="#top"
          variant="outline-light"
        >
         Back to Top
        </Button>
        </Col>
      </Row>
    </Container>
  );
}