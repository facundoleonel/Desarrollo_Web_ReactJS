import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";

export const EditarPost = ({ modal, toggle, post, crudBlog, finalAction }) => {
  const [form, setForm] = useState(post);

  useEffect(() => {
    setForm(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crudBlog.editar(form?.idBlog, form);
    toggle();
    finalAction();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title="Editar estudiante" isActive={modal} toggle={toggle}>
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
            placeholder={"ej: https://via.placeholder.com/800x600"}
          />
        </section>
        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </CustomModal>
  );
};
