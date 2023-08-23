import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LinkThree from "./../../Assets/jsons/linkThree.json";
export const AccesosRapidos = () => {
  return (
      <Row className="mt-3 mb-3" style={{rowGap: '10px'}}>
        {LinkThree.map(({ name, url }, k) => (
          <Col sm={3} key={k}>
            <a href={url} target="_blank" rel="noreferrer" className="elementor-container">
              {name}
            </a>
          </Col>
        ))}
      </Row>
  );
};
