import React from "react";
import {Card, Col, Row} from "react-bootstrap"
import { Ejemplo } from "./Ejemplo";

export const DecanoContent = () => {
  return (
    <Row>
        <Col>
            <Ejemplo />
        </Col>
      <Col>
        <Card style={{ width: "18rem" }} bg="success">
          <Card.Body>
            <Card.Title>Inscripciones</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} bg="danger">
          <Card.Body>
            <Card.Title>Estudiantes</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} bg="info">
          <Card.Body>
            <Card.Title>Carreras</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} bg="warning">
          <Card.Body>
            <Card.Title>Materias</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
