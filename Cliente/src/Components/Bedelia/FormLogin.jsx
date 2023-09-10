import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const initForm = {
  email: "",
  password: "",
};
export const FormLogin = () => {
  const [form, setForm] = useState(initForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = { rol: 0 }

    if (usuario.rol === 0){
      // Guardar en el context es bedelia
      navigate("/panel");
    } else if (usuario.rol === 1){
      // Guardar en el context es decano
      navigate("/panel");
    }else{
      // No es un usuario valido
      navigate("/404");
    }
  };
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
        Entrar
      </Button>
    </Form>
  );
};
