import React, { useState } from "react";

import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

import ListContacto from "./../../src/Assets/jsons/contactos.json";

export const Contacto = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(form !== "" ? JSON.stringify(form) : "faltan completar campos");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h5 className="text-center mt-3">Contacto</h5> <hr />
      <Container>
        <Row className="align-items-start">
          <Col>
            <h5 className="title">Secretaría de Extensión Universitaria</h5>
            <p>informes.fcad@uner.edu.ar</p>
            <h5 className="title">Oficina de Becas</h5>
            <p>estudiantes.fcad@uner.edu.ar</p>
          </Col>
          <Col>
            <h5 className="title">Oficina de Ciencia y Técnica</h5>
            <p>oficinacyt.fcad@uner.edu.ar</p>
            <h5 className="title">Oficina de Pasantías</h5>
            <p>pasantias.fcad@uner.edu.ar</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-4">
        <Row>
          <Col xs={6}>
            <ListGroup className="list-contactos">
              {ListContacto.map((e, k) => (
                <ListGroup.Item key={k}>
                  {e.name} - {e.tel}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ul></ul>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>Envianos tu consulta</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCorreo">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="correo"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="mensaje"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
