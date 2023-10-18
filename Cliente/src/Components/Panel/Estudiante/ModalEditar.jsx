import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";
import Nacionalidades from "./../../../Assets/jsons/nacionalidad.json";
import { crearEstudiante } from "../../../Helpers/estudiante";


export const ModalEditar = ({ modal, toggle, estudiante }) => {
  const [form, setForm] = useState(estudiante);
  useEffect(() => {
    setForm(estudiante);
  }, [estudiante]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await crearEstudiante( form )
    toggle();
    // setForm( initForm )
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <CustomModal title="Editar estudiante" isActive={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <section className="form-grid">
          <CustomInput
            title="DNI"
            name="dni"
            type="number"
            value={form.dni || ""}
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
            title="Apellido"
            name="apellido"
            type="text"
            value={form.apellido || ""}
            onChange={handleChange}
          />
          <CustomSelect
            title="Nacionalidad"
            name="nacionalidad"
            value={`${form.nacionalidad}` || ""}
            onChange={handleChange}
            listOption={Nacionalidades}
          />
          <CustomInput
            title="Celular"
            name="celular"
            type="text"
            value={form.celular || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Foto"
            name="foto"
            type="text"
            value={form.foto || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Correo Electronico"
            name="correoElectronico"
            type="email"
            value={form.correoElectronico || ""}
            onChange={handleChange}
          />
          <CustomInput
            title="Fecha de Nacimiento"
            name="fechaNacimiento"
            type="date"
            value={form.fechaNacimiento || ""}
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
