import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormLogin } from "../Components/Bedelia/FormLogin";
import { SectionTitle } from "../Layout/SectionTitle";
export const Login = () => {
  return (
    <Container>
      <Row className="justify-content-md-center m-5">
        <Col xs={5}>
          <SectionTitle title="Inicia sesión" />
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
};
