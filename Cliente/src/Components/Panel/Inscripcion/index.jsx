import React, { useEffect, useState } from "react";
import {
  formatearCarrera,
  formatearEstudiante,
  getFechaActual,
} from "../../../Helpers/utils";
import {
  crudCarrera,
  crudEstudiante,
  crudMateria,
} from "../../../Helpers/crud";
import {
  crearEstudianteCarrera,
  crearEstudianteMateria,
  getCarreraMateria,
  getEstudianteCarrera,
} from "../../../Helpers/relaciones";
import { Button, Card, Form } from "react-bootstrap";
import { CustomSelect } from "../utils/CustomSelect";
import { CustomListCheckbox } from "../utils/CustomListCheckbox";

const initFormEC = {
  fechaAlta: getFechaActual(),
  estudiante: "",
  carrera: "",
  materias: [],
};

const initListOption = { list: [], options: [] };

export const Inscripcion = () => {
  const [estudiantes, setEstudiantes] = useState(initListOption);
  const [carreras, setCarreras] = useState(initListOption);
  const [materias, setMaterias] = useState(initListOption);
  const [disableCarrera, setDisableCarrera] = useState(false);
  const [asignarEstudianteCarrera, setAsignarEstudianteCarrera] =
    useState(false);

  const [formEC, setFormEC] = useState(initFormEC);
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
    const obtenerMaterias = async () => {
      const list = await crudMateria.obtener();
      setMaterias({ list, options: [] });
    };
    obtenerMaterias();
  }, []);

  const handleChange = async (e) => {
    const result = { ...formEC, [e.target.name]: e.target.value };
    if (e.target.name === "estudiante") {
      const { carrera } = await getEstudianteCarrera(result.estudiante);
      if (carrera) {
        result.carrera = carrera;
        setDisableCarrera(true);
        obtenerMaterias(carrera);
      } else {
        setAsignarEstudianteCarrera(true);
        setDisableCarrera(false);
        result.carrera = " ";
      }
    }
    if (e.target.name === "carrera") {
      result.materias = [];
      obtenerMaterias(e.target.value);
    }
    setFormEC(result);
  };
  const obtenerMaterias = async (idCarrera) => {
    const options = [];
    const carreraMaterias = await getCarreraMateria(idCarrera);
    // idMateria
    if (carreraMaterias) {
      carreraMaterias.forEach((item) => {
        const materia = materias.list.find(
          (e) => e.idMateria === item.idMateria
        );
        options.push({ ...materia });
      });
      setMaterias({ ...materias, options: options });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formEC });
    if (asignarEstudianteCarrera) {
      // Estudiante carrera
      await crearEstudianteCarrera(
        formEC.estudiante,
        formEC.carrera
      );
    }
    // Estudiante materia
    await crearEstudianteMateria(formEC.fechaAlta, formEC.estudiante, formEC.materias)
  };
  const handleChangeMaterias = (e) => {
    e.preventDefault();
    let aux = formEC.materias;
    if (aux.length > 0) {
      if (!aux.includes( e.target.value )) {
        aux.push(e.target.value);
      }else{
        aux = aux.filter( el => el !== e.target.value )
      }
      setFormEC({ ...formEC, materias: aux });
    } else {
      setFormEC({ ...formEC, materias: [e.target.value] });
    }
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
          {materias.options.length > 0 && (
            <CustomListCheckbox
              selected={formEC.materias}
              options={materias.options}
              onChange={handleChangeMaterias}
            />
          )}

          <Button type="submit">Agregar Materia</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
