import React, { useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import Nacionalidades from "../../../Assets/jsons/nacionalidad.json";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";
import { formatearFecha } from "../../../Helpers/utils";
import { CustomUploadFile } from "../utils/CustomUploadFile";

const initForm = {
  dni: "",
  celular: "",
  foto: "",
  nombre: "",
  apellido: "",
  nacionalidad: 0,
  correoElectronico: "",
  fechaNacimiento: "",
};

export const AgregarEstudiante = ({ modal, crud, close, finalAction }) => {
  const [form, setForm] = useState(initForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // await crud.crear({...form});
    // close();
    // finalAction();
    // setForm(initForm);
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "nacionalidad") value = String(value);
    if (name === "fechaNacimiento") value = formatearFecha(value);
    setForm({ ...form, [name]: value });
  };
  return (
    <CustomModal title="Agregar nuevo" isActive={modal} close={close}>
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
          <CustomUploadFile
            name="foto"
            value={form.foto || ""}
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
