import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";

export const EditarMateria = ({ crud, modal, close, item, finalAction }) => {
  const [form, setForm] = useState(item);

  useEffect(() => {
    setForm(item);
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crud.editar(form?.idMateria, form);
    close();
    finalAction();
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title="Editar elemento" isActive={modal} close={close}>
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
            title="Horas semanales"
            name="horasSemanales"
            type="text"
            value={form.horasSemanales || ""}
            onChange={handleChange}
          />
          <CustomSelect
            title="Tipo de materia"
            name="tipoMateria"
            value={`${form.tipoMateria}` || ""}
            onChange={handleChange}
            listOption={[]}
          />
        </section>
        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </CustomModal>
  );
};
