import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormLogin } from "../Components/Bedelia/FormLogin";

export const Error = () => {
  return (
    <Container>
      <Row className="justify-content-md-center m-5">
        <Col xs={5}>
          <h1 className="title">Error</h1>
          <hr />
          <p>Parece que hubo un inconveniente o algo salio mal</p>
        </Col>
      </Row>
    </Container>
  );
};
