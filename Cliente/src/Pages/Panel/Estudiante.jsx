import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { Tabla } from "../../Components/Panel/Estudiante/Tabla";
import { crudEstudiante } from "../../Helpers/estudiante";
import { ModalNuevo } from "../../Components/Panel/Estudiante/ModalNuevo";
import { useModal } from "../../hooks/useModal";

export const Estudiante = () => {
  const [modal, open, close] = useModal(false);

 const [datos, setDatos] = useState(null);

  const obtenerTodos = async () => {
    const data = await crudEstudiante.obtener();
    setDatos(data);
  };

  useEffect(() => {
    obtenerTodos();
  }, []);

  return (
    <>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <h1>
            Panel Estudiante <hr />
          </h1>
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={open}>Agregar Estudiante</Button>
          </p>
          <Tabla
            crud={crudEstudiante}
            data={datos}
            toFinalAction={() => obtenerTodos()}
          />
        </Col>
      </Container>
      <ModalNuevo
        crud={crudEstudiante}
        modal={modal}
        close={close}
        finalAction={() => obtenerTodos()}
      />
    </>
  );
};
