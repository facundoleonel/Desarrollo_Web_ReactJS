// imports de bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Logo from "./../../Assets/img/logo-fcad.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="/">UNER</Navbar.Brand> */}
        <Navbar.Brand href="/">
          <img src={Logo} width={170} alt="UNER" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="algo" />
        <Navbar.Collapse id="algo">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
