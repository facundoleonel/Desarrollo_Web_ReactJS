import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../../Layout/SectionTitle";
import Articulo from "../../Components/Home/Articulos/Articulo";
import { userContext } from "../../Layout";
import { getRoutesForUser } from "../../Routes";
import { DecanoContent } from "../../Components/Panel/Decano/DecanoContent";

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
      {currentUser.tipoUsuario === 0 ? (
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
      ) : (
        <Row>
          <Col>
              <DecanoContent />
          </Col>
      </Row>
      )}
    </Container>
  );
};
