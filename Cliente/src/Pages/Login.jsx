import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FormLogin } from "../Components/Bedelia/FormLogin";
import { CustomModal } from "../Layout/CustomModal";
import { FormRegister } from "../Components/Bedelia/FormRegister";

export const Login = () => {
  const [modal, setModal] = useState(false);

  const handleToggleModal = (e) =>{
    e.preventDefault();
    setModal( !modal )
  }

  return (
    <Container>
      <Row className="justify-content-md-center m-5">
        <Col xs={5}>
          <h1 className="title">Inicia sesión</h1>
          <hr />
          <FormLogin />
          <div style={{ textAlign: "right" }}>
            <Button variant="warning" onClick={handleToggleModal}>
              Crear usuario
            </Button>
          </div>
          <br />
          <CustomModal title={"Crear usuario"} isActive={modal} toggle={handleToggleModal}>
            <FormRegister />
          </CustomModal>
        </Col>
      </Row>
    </Container>
  );
};
