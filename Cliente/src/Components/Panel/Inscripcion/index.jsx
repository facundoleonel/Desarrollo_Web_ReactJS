import React, { useEffect, useState } from "react";
import { EstudianteCarrera } from "./EstudianteCarrera";
import { EstudianteMateria } from "./EstudianteMateria";
import {
  formatearCarrera,
  formatearEstudiante,
  getFechaActual,
} from "../../../Helpers/utils";
import { crudCarrera, crudEstudiante } from "../../../Helpers/crud";
import { getEstudianteCarrera } from "../../../Helpers/relaciones";

const initFormEC = {
  fechaAlta: getFechaActual(),
  estudiante: null,
  carrera: null,
};

const initListOption = { list: [], options: [] };

export const Inscripcion = () => {
  const [estudiantes, setEstudiantes] = useState(initListOption);
  const [carreras, setCarreras] = useState(initListOption);

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
  const handleChangeEC = async (e) => {
    const value = parseInt(e.target.value)
    if (e.target.name === "estudiante") {
      const estudianteCarrera = await getEstudianteCarrera(value)
      console.log(estudianteCarrera);
      // seteamos el valor de carrera si existe
      // setFormEC({ ...formEC, carrera: estudianteCarrera.id });
    }
    setFormEC({ ...formEC, [e.target.name]: value });
  };

  const handleSubmitEC = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formEC));
    // setPage(page + 1);
  };
  return (
    <>
      {page === 0 && (
        <EstudianteCarrera
          estudiantes={estudiantes.options}
          carreras={carreras.options}
          form={formEC}
          onSubmit={handleSubmitEC}
          onChange={handleChangeEC}
        />
      )}
      {page === 1 && <EstudianteMateria />}
    </>
  );
};
