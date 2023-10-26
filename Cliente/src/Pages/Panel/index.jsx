import React, { useContext, useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../../Layout/SectionTitle";
import Articulo from "../../Components/Home/Articulos/Articulo";
import { userContext } from "../../Layout";
import { getRoutesForUser } from "../../Routes";

export const Panel = () => {
  const { currentUser } = useContext(userContext);
  const [arr, setArr] = useState([]);
  const [title, setTitle] = useState("Bienvenido");
  useEffect(() => {
    const loadRoutes = () => {
      let routes = getRoutesForUser(currentUser.tipoUsuario);
      routes = routes.filter((e) => e.name !== "Home");
      setArr(routes);
    };
    loadRoutes();

    setTitle(`Bienvenido ${currentUser.nombre} ${currentUser.apellido}`);
  }, [currentUser]);
  return (
    <Container>
      <Row>
        <Col>
          <SectionTitle title={title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }} bg='success'>
            <Card.Body>
              <Card.Title>Inscripciones</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} bg='danger'>
            <Card.Body>
              <Card.Title>Estudiantes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} bg='info'>
            <Card.Body>
              <Card.Title>Carreras</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} bg='warning'>
            <Card.Body>
              <Card.Title>Materias</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {arr.length > 0 &&
          arr.map((e, k) => (
            <Col xs={4} key={k}>
              <Articulo
                titulo={e.name}
                contenido={`Administracion de: ${e.name}`}
                permalink={e.path}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
