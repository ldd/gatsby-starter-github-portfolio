import React from "preact-compat";
import { Button, Panel, Col, Row } from "muicss/react";

export default ({ name, url, description, stargazers, readme }) => (
  <Col lg="4" md="6" sm="12">
    <Panel>
      <Row style={{ marginLeft: 1 }}>
        <Button size="small" color="danger" disabled={true}>
          {stargazers.totalCount}
        </Button>
        {/* Display the name of the repository as a title */}
        <Button
          size="small"
          onClick={() => (location.href = url)}
          color="primary"
        >
          {name}
        </Button>
      </Row>
      {readme.imageUrl ? (
        <div>
          <img
            src={readme.imageUrl}
            alt="[repository image]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      ) : null}
      <div>{description}</div>
    </Panel>
  </Col>
);
