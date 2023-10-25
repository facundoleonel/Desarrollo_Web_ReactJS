import React, { useEffect, useState } from "react";

import { Container, Col, Button } from "react-bootstrap";
import { useModal } from "../../hooks/useModal";
import { crudMateria } from "../../Helpers/crud";
import { SectionTitle } from "../../Layout/SectionTitle";
import { TablaMateria } from "../../Components/Panel/Materia/TablaMateria";
import { AgregarMateria } from "../../Components/Panel/Materia/AgregarMateria";

export const Materia = () => {
  const [modal, open, close] = useModal(false);
  const [datos, setDatos] = useState(null);

  const obtenerTodos = async () => {
    const data = await crudMateria.obtener();
    setDatos(data);
    console.log(data);
  };

  useEffect(() => {
    obtenerTodos();
  }, []);

  return (
    <>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <SectionTitle title="Panel Materia" />
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={open}>Agregar Materia</Button>
          </p>
          <TablaMateria
            crud={crudMateria}
            data={datos}
            toFinalAction={() => obtenerTodos()}
          />
        </Col>
      </Container>
      <AgregarMateria
        modal={modal}
        crud={crudMateria}
        close={close}
        finalAction={() => obtenerTodos()}
      />
    </>
  );
};
