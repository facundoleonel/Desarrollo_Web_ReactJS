import React, { useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import Modalidades from "../../../Assets/jsons/modalidad.json";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";

const initForm = {
  nombre: "",
  modalidad: "",
};

export const AgregarCarrera = ({ modal, crud, close, finalAction }) => {
  const [form, setForm] = useState(initForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await crud.crear(form);
    close();
    finalAction();
    setForm(initForm);
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  return (
    <CustomModal title="Agregar nuevo elemento" isActive={modal} close={close}>
      <Form onSubmit={handleSubmit}>
        <section className="form-grid">
          <CustomInput
            title="Nombre"
            name="nombre"
            type="text"
            value={form.nombre || ""}
            onChange={handleChange}
          />
          <CustomSelect
            title="Modalidad"
            name="modalidad"
            value={`${form.modalidad}` || ""}
            onChange={handleChange}
            listOption={Modalidades}
          />
        </section>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </CustomModal>
  );
};
