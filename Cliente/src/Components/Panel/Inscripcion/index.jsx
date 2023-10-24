import React, { useEffect, useState } from "react";
import {
  formatearCarrera,
  formatearEstudiante,
  getFechaActual,
} from "../../../Helpers/utils";
import { crudCarrera, crudEstudiante } from "../../../Helpers/crud";
import { getCarreraMateria, getEstudianteCarrera } from "../../../Helpers/relaciones";
import { Button, Card, Form } from "react-bootstrap";
import { CustomSelect } from "../utils/CustomSelect";

const initFormEC = {
  fechaAlta: getFechaActual(),
  estudiante: "",
  carrera: "",
};

const initListOption = { list: [], options: [] };

export const Inscripcion = () => {
  const [estudiantes, setEstudiantes] = useState(initListOption);
  const [carreras, setCarreras] = useState(initListOption);
  const [disableCarrera, setDisableCarrera] = useState(false);

  const [formEC, setFormEC] = useState(initFormEC);
  // const [page, setPage] = useState(0);
  const page = 0;
  useEffect(() => {
    const obtenerEstudiantes = async () => {
      const list = await crudEstudiante.obtener();
      const options = formatearEstudiante(list);
      setEstudiantes({ list, options });
    };
    obtenerEstudiantes();
    const obtenerCarreras = async () => {
      const list = await crudCarrera.obtener();
      const options = formatearCarrera(list);
      setCarreras({ list, options });
    };
    obtenerCarreras();
  }, []);
  const handleChange = async (e) => {
    const result = { ...formEC, [e.target.name]: e.target.value };
    if (e.target.name === "estudiante") {
      const { carrera } = await getEstudianteCarrera(result.estudiante);
      if (carrera) {
        result.carrera = carrera;
        setDisableCarrera(true);
      } else {
        setDisableCarrera(false);
        result.carrera = " ";
      }
    }
    if (e.target.name === "carrera") {
      const materias = await getCarreraMateria(result.carrera)
      console.log(materias);
    }
    setFormEC(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formEC);
  };
  const handleAsignarCarrera = (e) => {
    e.preventDefault();
    console.log("asignar carrera", formEC);
    // si sale ok deberia de
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5">Estudiante Carrera</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {estudiantes.options.length > 0 && (
            <CustomSelect
              title="Estudiante"
              name="estudiante"
              value={formEC?.estudiante || ""}
              onChange={handleChange}
              listOption={estudiantes.options}
            />
          )}
          {formEC.carrera !== "" && carreras.options.length > 0 && (
            <CustomSelect
              title="Carrera"
              name="carrera"
              value={formEC?.carrera || ""}
              onChange={handleChange}
              listOption={carreras.options}
              disable={disableCarrera}
            />
          )}
          <Button type="submit">Agregar Materia</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
