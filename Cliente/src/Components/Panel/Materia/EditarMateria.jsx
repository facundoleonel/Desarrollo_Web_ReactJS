import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";
import { crudCarrera } from "../../../Helpers/crud";

export const EditarMateria = ({ crud, modal, close, item, finalAction }) => {
  const [form, setForm] = useState(item);
  const [listadoCarrera, setListadoCarrera] = useState([])

  useEffect(() => {
    const obtenerCarreras = async () => {
      let listado = []
      const data = await crudCarrera.obtener()
      if (data.length > 0) {
        data.forEach(e => listado.push({ value: e.idCarrera, name: e.nombre }))
      }
      setListadoCarrera(listado)
    }
    obtenerCarreras();
  }, [])

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
            title="Carrera"
            name="idCarrera"
            value={`${form.idCarrera}` || ""}
            onChange={handleChange}
            listOption={listadoCarrera}
            disable={true}
          />
        </section>
        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </CustomModal>
  );
};
