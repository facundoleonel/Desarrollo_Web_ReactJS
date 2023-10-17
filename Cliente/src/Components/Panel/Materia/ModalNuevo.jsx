import React, { useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { crearMateria } from "../../../Helpers/materia";
import { Button, Col, Form, Row } from "react-bootstrap";

const initForm = {
  horasSemanales: "",
  nombre: "",
  tipoMateria: "",
};

export const ModalNuevo = ({ modal, toggle, finalAction }) => {
  const [form, setForm] = useState(initForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearMateria(form);
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
              <Form.Label>Horas Semanales</Form.Label>
              <Form.Control
                type="text"
                name="horasSemanales"
                onChange={handleChange}
                value={form.horasSemanales}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNombre">
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
            <Form.Group className="mb-3" controlId="formBasicApellido">
              <Form.Label>Tipo Materia</Form.Label>
              <Form.Control
                type="text"
                name="tipoMateria"
                onChange={handleChange}
                value={form.tipoMateria}
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
