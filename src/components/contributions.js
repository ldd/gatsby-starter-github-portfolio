import React from "preact-compat";
import { Container, Row } from "muicss/react";
import Contribution from "./contribution";
const srcs = [
  "https://raw.githubusercontent.com/melonjs/melonJS/master/media/loading-screen-logo.png",
  "https://camo.githubusercontent.com/4416fb15c39b3d51468fbadce39aa04fafb96032/68747470733a2f2f7777772e6d75696373732e636f6d2f7374617469632f66617669636f6e732f69636f6e2d313932783139322e706e67"
];
export default ({ data }) => (
  <Container fluid={true}>
    <Row>
      {data.map((contribu, i) => <Contribution src={srcs[i]} {...contribu} />)}
    </Row>
  </Container>
);
