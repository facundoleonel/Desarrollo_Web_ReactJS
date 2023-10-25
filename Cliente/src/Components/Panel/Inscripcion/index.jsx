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
  // crearEstudianteCarrera,
  getCarreraMateria,
  getEstudianteCarrera,
} from "../../../Helpers/relaciones";
import { Button, Card, Form, ListGroup } from "react-bootstrap";
import { CustomSelect } from "../utils/CustomSelect";

const initFormEC = {
  fechaAlta: getFechaActual(),
  estudiante: "",
  carrera: "",
  materia: "",
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
      // const options = formatearCarrera(list);
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
        obtenerMaterias( carrera )
      } else {
        setAsignarEstudianteCarrera(true);
        setDisableCarrera(false);
        result.carrera = " ";
      }
    }
    if (e.target.name === "carrera") {
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
      console.log(options);
      setMaterias({ ...materias, options: options });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formEC });
    // asignar estudiante carrera si AsignarEstudianteCarrera == true
    if (asignarEstudianteCarrera) {
      // const result = await crearEstudianteCarrera(
      //   formEC.estudiante,
      //   formEC.carrera
      // );
      // console.log("asignar estudiante-carrera", result);
    }
  };
  const handleChangeMaterias = (e) => {
    e.preventDefault();
    if (formEC.materia !== "") {
      let nuevo = formEC.materia;
      nuevo += `,${e.target.value}`;
      setFormEC({ ...formEC, materia: nuevo });
    } else {
      setFormEC({ ...formEC, materia: e.target.value });
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
          <ListGroup className="mb-3">
            {materias.options.length > 0 &&
              materias.options.map((e, k) => (
                <ListGroup.Item key={k}>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={e.idMateria}
                    label={e.nombre}
                    value={e.idMateria}
                    onChange={handleChangeMaterias}
                  />
                </ListGroup.Item>
              ))}
          </ListGroup>

          <Button type="submit">Agregar Materia</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
