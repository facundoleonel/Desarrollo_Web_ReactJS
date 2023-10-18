import React, { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Button, Col, Container } from "react-bootstrap";
import { crudBlog } from "../../Helpers/blog";
import { AgregarPost } from "../../Components/Panel/Blog/AgregarPost";
import { TablaPost } from "../../Components/Panel/Blog/TablaPosts";

export const Blog = () => {
  const [modal, open, close] = useModal(false);
  const [datos, setDatos] = useState(null);

  const obtenerTodos = async () => {
    const data = await crudBlog.obtener();
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
            Panel Blog <hr />
          </h1>
          <p xs={12} style={{ textAlign: "right" }}>
            <Button onClick={open}>Agregar Blog</Button>
          </p>
          <TablaPost
            data={datos}
            crudBlog={crudBlog}
            toFinalAction={() => obtenerTodos()}
          />
          <AgregarPost
            crudBlog={crudBlog}
            modal={modal}
            close={close}
            finalAction={() => obtenerTodos()}
          />
        </Col>
      </Container>
    </>
  );
};
