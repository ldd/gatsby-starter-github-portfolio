import React from "preact/compat";
import { Button, Col, Row, Panel } from "muicss/react";

// a contribution component that displays a single contribution you've made
export default ({ src, title, url, repository }) => (
  <Col md="6">
    <Panel>
      <Row>
        <Col md="12">
          <Button
            color="primary"
            onClick={() => (location.href = repository.repoUrl)}
          >
            {repository.name}
          </Button>
        </Col>
      </Row>
      <a href={url} style={{ marginLeft: 1 }}>
        {title}
      </a>
    </Panel>
  </Col>
);
