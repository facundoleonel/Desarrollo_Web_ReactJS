// imports de bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Logo from "./../../Assets/img/logo-fcad.png";
import { Col, Row } from "react-bootstrap";
import { NavBarPanel } from "./NavBarPanel";

// segun el userRol mostrar un menu u otro
// userRol (0) Mostrar el menu por defecto + menu de bedelia
// userRol (1) Mostrar el menu por defecto + menu de decano
// userRol (n) Mostrar el menu por defecto

function Header({ tipoUsuario = -1, nombre}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} width={170} alt="UNER" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            {[0, 1].includes(tipoUsuario) ? (
              <NavBarPanel tipo={tipoUsuario} nombre={nombre} />
            ) : (

            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Portada
              </Nav.Link>
              <Nav.Link as={Link} to="/institucion">
                Información institucional
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
                <Nav.Link as={Link} to="/login" style={{ color: "orange" }}>
                  Bedelia
                </Nav.Link>
            </Nav>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { Header };
