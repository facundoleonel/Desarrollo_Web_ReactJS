import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "../Components/Post";

export const Inicio = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-20&to=2023-08-20&sortBy=popularity&apiKey=0240c08a06794076b7347d62d446c804`;
    fetch(url)
      .then((res) => res.json())
      .then((date) => {
        //slice(0,4) que trae los primero cuatro contenidos del articles
        setText(date.articles.slice(0, 4));
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
        {text.map(({ urlToImage, title, description }, k) => (
          <Col key={k} xs={4}>
            <Post
              image={urlToImage}
              title={title}
              description={String(description).split(0, 10)[0]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
