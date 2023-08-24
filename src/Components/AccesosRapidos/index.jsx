import React from "react";
import { Col, Row } from "react-bootstrap";
import LinksFcad from "./../../Assets/jsons/links-fcad.json";
export const AccesosRapidos = () => {
  return (
      <Row className="mt-3 mb-3" style={{rowGap: '10px'}}>
        {LinksFcad.map(({ name, url }, k) => (
          <Col sm={3} key={k}>
            <a href={url} target="_blank" rel="noreferrer" className="elementor-container">
              {name}
            </a>
          </Col>
        ))}
      </Row>
  );
};
