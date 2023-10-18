import React, { useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { crearEstudiante } from "../../../Helpers/estudiante";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";

const initForm = {
  titulo: "",
  contenido: "",
  imagen: "",
};

export const AgregarPost = ({ modal, toggle, crudBlog, finalAction }) => {
  const [form, setForm] = useState(initForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    crudBlog.crear(form);
    toggle();
    finalAction();
    setForm(initForm);
  };
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'nacionalidad') value = String(value)
    setForm({ ...form, [name]: value });
  };
  return (
    <CustomModal title="Agregar nuevo" isActive={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <section className="form-grid">
          <CustomInput
            title="Titulo"
            name="titulo"
            type="text"
            value={form.titulo || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Contenido"
            name="contenido"
            type="text"
            value={form.contenido || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Imagen"
            name="imagen"
            type="text"
            value={form.imagen || ""}
            onChange={handleChange}
            placeholder={'ej: https://via.placeholder.com/800x600'}
          />
        </section>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </CustomModal>
  );
};
