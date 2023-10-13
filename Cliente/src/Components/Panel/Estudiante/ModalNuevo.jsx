import React, { useState } from 'react'
import { CustomModal } from '../../../Layout/CustomModal'
import { crearEstudiante } from '../../../Helpers/estudiante';
import { Button, Col, Form, Row } from 'react-bootstrap';

const initForm = {
  dni: "",
  nombre: "",
  apellido: "",
  nacionalidad: 0,
  correoElectronico: "",
  fechaNacimiento: "",
}

export const ModalNuevo = ({modal, toggle, finalAction}) => {
  const [form, setForm] = useState(initForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearEstudiante( form )
    toggle();
    finalAction();
    setForm( initForm )
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title='Agregar nuevo' isActive={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              name="dni"
              onChange={handleChange}
              value={form.dni}
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
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              onChange={handleChange}
              value={form.apellido}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicNacionalidad">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Select
              name="nacionalidad"
              onChange={handleChange}
              defaultValue="Nacionalidad"
            >
              <option value="">Seleccione una opción</option>
              <option value="0">Argentino</option>
              <option value="1">Uruguayo</option>
              <option value="2">Chileno</option>
              <option value="3">Paraguayo</option>
              <option value="4">Brasilero</option>
              <option value="5">Boliviano</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="text"
              name="correoElectronico"
              onChange={handleChange}
              value={form.correoElectronico}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEdad">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              name="fechaNacimiento"
              onChange={handleChange}
              value={form.fechaNacimiento}
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
  )
}
