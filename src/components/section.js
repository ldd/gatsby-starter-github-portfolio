import React from "preact-compat";
import { Button, Container, Row, Col } from "muicss/react";

export default ({ label }) => (
  <Container fluid={true}>
    <Row>
      <Col xs="12">
        <Button disabled={true}>{label}</Button>
      </Col>
    </Row>
  </Container>
);
