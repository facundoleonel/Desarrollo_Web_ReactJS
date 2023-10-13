import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { Tabla } from "../../Components/Panel/Estudiante/Tabla";
import { obtenerEstudiantes } from "../../Helpers/estudiante";
import { ModalNuevo } from "../../Components/Panel/Estudiante/ModalNuevo";

export const Estudiante = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    buscarEstudiantes();
  }, []);

  const buscarEstudiantes = async () => {
    const data = await obtenerEstudiantes();
    setDatos(data);
  };

  return (
    <>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <h1>
            Panel Estudiante <hr />
          </h1>
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={toggleModal}>Agregar Estudiante</Button>
          </p>
          <Tabla data={datos} />
        </Col>
      </Container>
      <ModalNuevo modal={modal} toggle={toggleModal} finalAction={ ()=> buscarEstudiantes() } />
    </>
  );
};
