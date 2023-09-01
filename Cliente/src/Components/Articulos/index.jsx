import React from "react";
import Articulo from "./Articulo";
import { Col, Row } from "react-bootstrap";

export const Articulos = ({posts}) => {
  return (
    <Row>
      {posts.map(({ urlToImage, title, description }, k) => (
        <Col key={k} xs={4}>
          <Articulo
            image={urlToImage}
            title={title}
            description={description}
          />
        </Col>
      ))}
    </Row>
  );
};
