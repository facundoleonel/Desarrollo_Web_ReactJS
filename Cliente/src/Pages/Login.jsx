import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormLogin } from "../Components/Bedelia/FormLogin";

export const Login = () => {
  return (
    <Container>
      <Row className="justify-content-md-center m-5">
        <Col xs={5}>
          <h1 className="title">Inicia sesión</h1>
          <hr />
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
};
