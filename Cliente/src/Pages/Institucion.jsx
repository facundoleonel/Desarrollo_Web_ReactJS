import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Institucion = () => {
  return (
    <Container className="px-4 mt-3 mb-5">
      <Row className="gx-5">
        <Col xs={12}>
          <h5 className="text-center mt-3">LA INSTITUCIÓN</h5> <hr />
        </Col>
        <Col className="p-3">
          <h4 className="text-center title">Valores</h4>
          <h5 className="title">Calidad académica</h5>
          <p>
            Búsqueda permanente de un elevado nivel académico científico y
            compromiso con la generación de nuevos conocimientos y su
            transferencia.
          </p>
          <h5 className="title">Honestidad y transparencia</h5>
          <p>
            La institución promueve la honestidad en el desempeño de todos sus
            miembros y la transparencia en la gestión.
          </p>
          <h5 className="title">Respeto</h5>
          <p>
            La institución promueve el respeto por los derechos y la dignidad de
            las personas y por el ambiente.
          </p>
          <h5 className="title">Libertad académica</h5>
          <p>Libertad de enseñar y aprender en un ámbito democrático.</p>
          <h5 className="title">Compromiso social y regional</h5>
          <p>
            El compromiso social y regional se manifiesta en que las carreras de
            grado y posgrado, los planes de estudio, los contenidos de los
            programas así como los proyectos de investigación y extensión
            contemplen el desarrollo social y regional. Entendiendo el espacio
            regional en su interrelación con lo local, lo nacional y lo global.
          </p>
          <h5 className="title">Democracia</h5>
          <p>
            La democracia como modelo de gobierno de la institución que promueve
            la participación de todos sus miembros, como modo de pensar y actuar
            y como valor a transmitir y fortalecer en la comunidad educativa y
            en la sociedad.
          </p>
          <h5 className="title">Innovación</h5>
          <p>
            Promover una actitud proactiva y emprendedora, generando un ambiente
            propicio para ello.
          </p>
        </Col>
        <Col className="p-3" style={{ backgroundColor: "#D5DBDB" }}>
          <h4 className="text-center title">Misión</h4>
          <p>
            La Facultad de Ciencias de la Administración promueve la docencia,
            la investigación y la extensión para la generación y el intercambio
            de conocimientos orientados a la integración y el desarrollo
            económico y social de la región, en un marco de compromiso con la
            calidad académica, los valores democráticos y la autonomía en la
            toma de decisiones.
          </p>
          <p style={{ fontWeight: 700 }}>
            Sus principales funciones son promover:
          </p>
          <ul>
            <li>La formación integral del estudiante.</li>
            <li>
              La mejora continua del proceso de enseñanza y aprendizaje de grado
              y posgrado.
            </li>
            <li>
              El desarrollo científico mediante la producción de nuevos
              conocimientos.
            </li>
            <li>
              La generación de espacios de formación continua para los
              graduados.
            </li>
            <li>
              La cooperación y la vinculación con otras instituciones del
              sistema educativo y de la sociedad.
            </li>
            <li>El desarrollo de competencias emprendedoras.</li>
            <li>Las actividades socio-culturales.</li>
          </ul>
          <h4 className="text-center title">Visión</h4>
          <p>
            La Facultad de Ciencias de la Administración es un referente
            regional en la formación de grado y posgrado, reconocida por su
            equipo docente dinámico, proactivo y orientado a la formación
            integral del estudiante; por su propuesta académica actualizada y
            articulada con la investigación y la extensión; por su producción
            científica y tecnológica; por su calidad institucional, en un
            ambiente democrático de diálogo, respeto y libertad de pensamiento;
            y por su compromiso con la región.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
