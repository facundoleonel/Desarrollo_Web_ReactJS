import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { TablaEstudiante } from "../../Components/Panel/Estudiante/TablaEstudiante";
import { AgregarEstudiante } from "../../Components/Panel/Estudiante/AgregarEstudiante";
import { useModal } from "../../hooks/useModal";
import { crudEstudiante } from "../../Helpers/crud";
import { SectionTitle } from "../../Layout/SectionTitle";
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
          <SectionTitle title='Panel Estudiante' />
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={open}>Agregar Estudiante</Button>
          </p>
          <TablaEstudiante
            crud={crudEstudiante}
            data={datos}
            toFinalAction={() => obtenerTodos()}
          />
        </Col>
      </Container>
      <AgregarEstudiante
        crud={crudEstudiante}
        modal={modal}
        close={close}
        finalAction={() => obtenerTodos()}
      />
    </>
  );
};
