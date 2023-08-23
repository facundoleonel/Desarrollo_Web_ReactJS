import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Articulo from "../Components/Articulo";

export const Inicio = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-20&to=2023-08-20&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
    fetch(url)
      .then((res) => res.json())
      .then((date) => {
        //slice(0,4) que trae los primero cuatro contenidos del articles
        setArticulos(date.articles.slice(0, 4));
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Inicio</h1>
        </Col>
      </Row>
      <Row>
        {articulos.map(({ urlToImage, title, description }, k) => (
          <Col key={k} xs={4}>
            <Articulo
              image={urlToImage}
              title={title}
              description={description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
