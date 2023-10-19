import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../../Layout/SectionTitle";
import Articulo from "../../Components/Home/Articulos/Articulo";
import { userContext } from "../../Layout";
import { getRoutesForUser } from "../../Routes";

export const Panel = () => {
  const [arr, setArr] = useState([]);
  const { currentUser } = useContext(userContext);
  useEffect(() => {
    const loadRoutes = () => {
      let routes = getRoutesForUser(currentUser.tipoUsuario);
      routes = routes.filter((e)=> e.name !== "Home")
      setArr(routes);
    };
    loadRoutes();
  }, [currentUser]);
  return (
    <Container>
      <Row>
        <Col>
          <SectionTitle title="Bedelia" />
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
