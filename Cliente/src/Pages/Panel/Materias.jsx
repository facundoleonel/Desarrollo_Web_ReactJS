import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { Tabla } from "../../Components/Panel/Materia/Tabla";
import { obtenerMateria } from "../../Helpers/materia";
import { ModalNuevo } from "../../Components/Panel/Materia/ModalNuevo";
import { useModal } from "../../hooks/useModal";

export const Materia = () => {
  const [modal, setModal, toggle] = useModal(false);
  const activeModal = () => {
    setModal(true);
  };
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    buscarMaterias();
  }, []);

  const buscarMaterias = async () => {
    const data = await obtenerMateria();
    setDatos(data);
  };

  return (
    <>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <h1>
            Panel Materia <hr />
          </h1>
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={activeModal}>Agregar Materia</Button>
          </p>
          <Tabla data={datos} />
        </Col>
      </Container>
      <ModalNuevo
        modal={modal}
        toggle={toggle}
        finalAction={() => buscarMaterias()}
      />
    </>
  );
};
