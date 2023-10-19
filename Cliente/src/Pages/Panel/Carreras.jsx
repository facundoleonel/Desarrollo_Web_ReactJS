import React, { useEffect, useState } from "react";

import { Container, Col, Button} from "react-bootstrap";
import { useModal } from "../../hooks/useModal";
import { crudCarrera } from "../../Helpers/crud";
import { SectionTitle } from "../../Layout/SectionTitle";

export const Carrera = () => {
  const [modal, open, close] = useModal(false);
  const [datos, setDatos] = useState(null);

  const obtenerTodos = async () => {
    const data = await crudCarrera.obtener();
    setDatos(data);
  };

  useEffect(() => {
    obtenerTodos();
  }, []);

  return (
    <>
    <Container className="mt-5 mb-4">
      <Col xs={12}>
        <SectionTitle title="Panel Carrera" />
        <p xs={12} style={{ textAlign: "right" }}>
          <Button onClick={open}>Agregar Carrera</Button>
        </p>
        {/* <Tabla data={datos} /> */}
      </Col>
    </Container>
    {/* <ModalNuevo modal={modal} close={close} finalAction={ ()=> obtenerTodos() } /> */}
  </>
  );
};
