import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


const initForm = {
  email: "",
  password: "",
};
export const FormRegister = () => {
  const [form, setForm] = useState(initForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(form)
  }
  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
  );
};
