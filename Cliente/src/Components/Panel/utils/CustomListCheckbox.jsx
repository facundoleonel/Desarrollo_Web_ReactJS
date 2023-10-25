import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

export const CustomListCheckbox = ({ selected = [], options, onChange }) => {
  return (
    <ListGroup className="mb-3" key={selected.length}>
      {options.map((e, k) => (
        <ListGroup.Item key={k}>
          <Form.Check // prettier-ignore
            type="checkbox"
            id={e.idMateria}
            label={e.nombre}
            value={e.idMateria}
            onChange={onChange}
            checked={ selected.includes(String(e.idMateria)) }
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
