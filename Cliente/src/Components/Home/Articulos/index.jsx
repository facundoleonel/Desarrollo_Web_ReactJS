import React from "react";
import Articulo from "./Articulo";
import { Col, Row } from "react-bootstrap";

export const Articulos = ({posts}) => {
  return (
    <Row>
      {posts.map(({ imagen, titulo, contenido }, k) => (
        <Col key={k} xs={4}>
          <Articulo
            imagen={imagen}
            titulo={titulo}
            contenido={contenido}
          />
        </Col>
      ))}
    </Row>
  );
};
