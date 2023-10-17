import React, { useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { crearCarrera } from "../../../Helpers/carrera";
import { Button, Col, Form, Row } from "react-bootstrap";

const initForm = {
  nombre: "",
  modalidad: "",
};

export const ModalNuevo = ({ modal, toggle, finalAction }) => {
  const [form, setForm] = useState(initForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCarrera(form);
    toggle();
    finalAction();
    setForm(initForm);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title="Agregar nuevo" isActive={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicDni">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChange}
                value={form.nombre}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Modalidad</Form.Label>
              <Form.Control
                type="text"
                name="modalidad"
                onChange={handleChange}
                value={form.modalidad}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </CustomModal>
  );
};
