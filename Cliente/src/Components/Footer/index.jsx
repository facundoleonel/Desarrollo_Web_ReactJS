import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./footer.css";
import Listenlaces from "./../../Assets/jsons/enlaces-utiles.json";
import Facebook from "./../../Assets/img/facebook.webp";
import Instagram from "./../../Assets/img/instagram.webp";

function Footer() {
  return (
    <footer>
      <Container className="text-center pt-3">
        <Row className="align-items-start">
          <Col>
            <h6>Enlaces útiles</h6> <hr />
            <ListGroup>
              {Listenlaces.map(({ name, url }, k) => (
                <ListGroup.Item
                  key={k}
                  style={{
                    backgroundColor: "#101318",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="elementor-enlace"
                  >
                    {name}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h6>Acceso a Redes</h6> <hr />
            <Container className="px-5 text-center">
              <Row className="gx-1">
                <Col className="p-2">
                  <a
                    href="https://www.facebook.com/Fac.Cs.Administracion/"
                    target="_black"
                  >
                    <img src={Facebook} className="facebook" alt="facebook" />
                  </a>
                </Col>
                <Col className="p-2">
                  <a
                    href="https://www.instagram.com/fcad.uner/?hl=es-la"
                    target="_balck"
                  >
                    <img
                      src={Instagram}
                      className="instagram"
                      alt="instagram"
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <h6>Facultad de Ciencias de la Administración</h6> <hr />
            <p>
              Monseñor Tavella 1424. Concordia. CP(3200). | Provincia de Entre
              Ríos Teléfono: (+54) (345) 4231400 – Fax: (+54) (345) 4231410 |
              E-mail.: informes.fcad@uner.edu.ar
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer text-center">
        <p>
          FACULTAD DE CIENCIAS DE LA ADMINISTRACIÓN - UNIVERSIDAD NACIONAL DE
          ENTRE RÍOS
        </p>
      </div>
    </footer>
  );
}

export { Footer };
