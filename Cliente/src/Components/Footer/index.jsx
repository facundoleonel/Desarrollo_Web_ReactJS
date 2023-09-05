import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./footer.css";
import Listenlaces from "./../../Assets/jsons/enlaces-utiles.json";
import Facebook from "./../../Assets/img/facebook.webp";
import Instagram from "./../../Assets/img/instagram.webp";

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h6>Enlaces útiles</h6> <hr />
            <Container>
              <Row>
                <Col>
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
                  <ul></ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="col">
            <h6>Acceso a Redes</h6> <hr />
            <div class="container px-5 text-center">
              <div class="row gx-1">
                <div class="col">
                  <div class="p-2">
                    <a
                      href="https://www.facebook.com/Fac.Cs.Administracion/"
                      target="_black"
                    >
                      <img src={Facebook} className="facebook" alt="facebook" />
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="p-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h6>Facultad de Ciencias de la Administración</h6> <hr />
            <p>
              Monseñor Tavella 1424. Concordia. CP(3200). | Provincia de Entre
              Ríos Teléfono: (+54) (345) 4231400 – Fax: (+54) (345) 4231410 |
              E-mail.: informes.fcad@uner.edu.ar
            </p>
          </div>
        </div>
      </div>
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
