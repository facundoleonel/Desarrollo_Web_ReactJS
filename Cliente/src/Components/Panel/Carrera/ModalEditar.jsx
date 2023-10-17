import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";

export const ModalEditar = ({ modal, toggle, carrera }) => {
  const [form, setForm] = useState(carrera);
  useEffect(() => {
    setForm(carrera);
  }, [carrera]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // await crearCarrera( form )
    // toggle();
    // setForm( initForm )
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <CustomModal title="Editar Carrera" isActive={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <section className="form-grid">
          <CustomInput
            title="Nombre"
            name="nombre"
            type="text"
            value={form.nombre || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Modalidad"
            name="modalidad"
            type="number"
            value={form.modalidad || ""}
            onChange={handleChange}
          />
        </section>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </CustomModal>
  );
};
