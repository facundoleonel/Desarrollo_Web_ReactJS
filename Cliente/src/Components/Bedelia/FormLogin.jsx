import React from "react";
import { Button, Form } from "react-bootstrap";

export const FormLogin = () => {


  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Usuario" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
};
