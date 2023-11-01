import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../../Layout/SectionTitle";
import { Inscripcion } from "../../Components/Panel/Inscripcion";
import { ListInscripciones } from "../../Components/Panel/Inscripcion/ListInscripciones";
import { crudCarrera, crudEstudiante } from "../../Helpers/crud";
import { formatearCarrera, formatearEstudiante } from "../../Helpers/utils";
import { getInscripciones } from "../../Helpers/relaciones";
const initListOption = { list: [], options: [] };

export const Inscripciones = () => {
  const [estudiantes, setEstudiantes] = useState(initListOption);
  const [carreras, setCarreras] = useState(initListOption);

  const [insc, setListInsc] = useState([]);

  useEffect(() => {
    const obtenerEstudiantes = async () => {
      const list = await crudEstudiante.obtener();
      const options = formatearEstudiante(list);
      setEstudiantes({ list, options });
    };
    const obtenerCarreras = async () => {
      const list = await crudCarrera.obtener();
      const options = formatearCarrera(list);
      setCarreras({ list, options });
    };
    obtenerEstudiantes();
    obtenerCarreras();
  }, []);

  useEffect(() => {
    const inscripciones = async ()=>{
        const res = await getInscripciones();
        setListInsc(res);
    }
    inscripciones();
  }, []);

  return (
    <>
      <Container className="mt-5 mb-4">
        <Row>
          <Col xs={12}>
            <SectionTitle title="Panel Inscripciones" />
          </Col>
          <Col md={4} xs={12}>
            <Inscripcion estudiantes={estudiantes} carreras={carreras} />
          </Col>
          <Col md={8} xs={12}>
            <ListInscripciones list={insc} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
