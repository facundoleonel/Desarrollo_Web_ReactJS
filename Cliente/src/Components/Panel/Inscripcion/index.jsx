import React, { useEffect, useState } from "react";
import { EstudianteCarrera } from "./EstudianteCarrera";
import { EstudianteMateria } from "./EstudianteMateria";
import { formatearCarrera, formatearEstudiante, getFechaActual } from "../../../Helpers/utils";
import { crudCarrera, crudEstudiante } from "../../../Helpers/crud";
import { Alert } from "react-bootstrap";

const initFormEC = {
  fechaAlta: getFechaActual(),
  estudiante: null,
  carrera: null
}

export const Inscripcion = () => {
  const [listEstudiante, setListadoEstudiante] = useState([])
  const [listCarrera, setListadoCarrera] = useState([])

  const [formEC, setFormEC] = useState(initFormEC)
  const [page, setPage] = useState(0);
  useEffect(() => {
    const obtenerEstudiantes = async () => {
      const data = await crudEstudiante.obtener();
      const listado = formatearEstudiante(data)
      setListadoEstudiante(listado)
    }
    obtenerEstudiantes();
    const obtenerCarreras = async () => {
      const data = await crudCarrera.obtener();
      const listado = formatearCarrera(data)
      setListadoCarrera(listado)
    }
    obtenerCarreras();
  }, [])
  const handleChangeEC = (e) => {
    if (e.target.name === "estudiante") {
      
    }
    setFormEC({ ...formEC, [e.target.name]: e.target.value })
  }

  const handleSubmitEC = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formEC))
    // handleNext();
  }

  // const handleNext = () => setPage(page + 1)

  return (
    <>
      {page === 0 &&
        <EstudianteCarrera
          estudiantes={listEstudiante}
          carreras={listCarrera}
          form={formEC}
          onSubmit={handleSubmitEC}
          onChange={handleChangeEC}
        />}
      {page === 1 && <EstudianteMateria />}
    </>
  )
};
