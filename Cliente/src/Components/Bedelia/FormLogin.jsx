import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { userContext } from "../../Layout";
import { getAxiosUsuario, setLocalUser } from "../../temp/simulador";

const initForm = {
  email: "",
  password: "",
};
export const FormLogin = () => {
  const { loginUser } = useContext(userContext);
  const [form, setForm] = useState(initForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const usuario = { tipoUsuario: 0 }
    await getAxiosUsuario(form)
      .then((data) => {
        data.tipoUsuario = 0 // 
        loginUser(data);
        setLocalUser(data);
        navigate("/panel");
      })
      .catch((err) => console.log(err));
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
