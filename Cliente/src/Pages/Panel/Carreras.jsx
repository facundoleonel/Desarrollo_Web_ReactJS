import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { Tabla } from "../../Components/Panel/Carrera/Tabla";
import { obtenerCarrera } from "../../Helpers/carrera";
import { ModalNuevo } from "../../Components/Panel/Carrera/ModalNuevo";
import { useModal } from "../../hooks/useModal";

export const Carrera = () => {
  const [modal, setModal, toggle] = useModal(false);
  const activeModal = () => {
    setModal(true);
  };
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    buscarCarreras();
  }, []);

  const buscarCarreras = async () => {
    const data = await obtenerCarrera();
    setDatos(data);
  };

  return (
    <>
    <Container className="mt-5 mb-4">
      <Col xs={12}>
        <h1>
          Panel Carrera <hr />
        </h1>
        <p xs={12} style={{ textAlign: "right" }}>
          <Button onClick={activeModal}>Agregar Carrera</Button>
        </p>
        <Tabla data={datos} />
      </Col>
    </Container>
    <ModalNuevo modal={modal} toggle={toggle} finalAction={ ()=> buscarCarreras() } />
  </>
  );
};
