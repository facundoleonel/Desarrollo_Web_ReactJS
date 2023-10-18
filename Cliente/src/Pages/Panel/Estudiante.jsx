import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { Tabla } from "../../Components/Panel/Estudiante/Tabla";
import { obtenerEstudiantes } from "../../Helpers/estudiante";
import { ModalNuevo } from "../../Components/Panel/Estudiante/ModalNuevo";
import { useModal } from "../../hooks/useModal";

export const Estudiante = () => {
  const [modal, setModal, toggle] = useModal( false )
  const activeModal = () =>{
    setModal(true)
  }
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
            <Button onClick={activeModal}>Agregar Estudiante</Button>
          </p>
          <Tabla data={datos} toFinalAction={()=> buscarEstudiantes()} />
        </Col>
      </Container>
      <ModalNuevo modal={modal} toggle={toggle} finalAction={ ()=> buscarEstudiantes() } />
    </>
  );
};
