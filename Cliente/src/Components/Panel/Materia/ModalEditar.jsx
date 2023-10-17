import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";


export const ModalEditar = ({ modal, toggle, materia }) => {
  const [form, setForm] = useState(materia);
  useEffect(() => {
    setForm(materia);
  }, [materia]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // await crearMateria( form )
    // toggle();
    // setForm( initForm )
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title="Editar materia" isActive={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <section className="form-grid">
          <CustomInput
            title="HorasSemanales"
            name="horasSemanales"
            type="number"
            value={form.horasSemanales || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Nombre"
            name="nombre"
            type="text"
            value={form.nombre || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Tipo Materia"
            name="tipoMateria"
            type="text"
            value={form.tipoMateria || ""}
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
