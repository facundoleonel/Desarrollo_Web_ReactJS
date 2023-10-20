import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../Layout/CustomModal";
import { Button, Form } from "react-bootstrap";
// import Modalidades from "../../../Assets/jsons/modalidad.json";
import { CustomInput } from "../utils/CustomInput";
import { CustomSelect } from "../utils/CustomSelect";
import { crudCarrera } from "../../../Helpers/crud";
import { crearCarreraMateria } from "../../../Helpers/relaciones";

const initForm = {
  nombre: "",
  idCarrera: "",
  horasSemanales: "",
};

export const AgregarMateria = ({ modal, crud, close, finalAction }) => {
  const [form, setForm] = useState(initForm);
  const [listadoCarrera, setListadoCarrera] = useState([])

  useEffect(()=>{
    const obtenerCarreras = async ()=>{
      let listado = []
      const data = await crudCarrera.obtener()
      if (data.length > 0) {
        data.forEach( e => listado.push( { value: e.idCarrera, name: e.nombre } ) )
      }
      setListadoCarrera( listado )
    }
    obtenerCarreras();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const materia = await crud.crear(form)
    await crearCarreraMateria(materia?.idCarrera, materia?.idMateria)
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
          />
        </section>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </CustomModal>
  );
};
