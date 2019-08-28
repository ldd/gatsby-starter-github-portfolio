import React from "preact/compat";
import { Container, Row } from "muicss/react";
import Repository from "./repository";

export default ({ data }) => (
  <Container fluid={true}>
    <Row>
      {data.map(repository => (
        <Repository {...repository} />
      ))}
    </Row>
  </Container>
);
