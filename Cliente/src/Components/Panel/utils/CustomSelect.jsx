import React from "react";
import { Form } from "react-bootstrap";
export const CustomSelect = ({
  title,
  name,
  value,
  onChange,
  listOption = [],
}) => {
  return (
    <Form.Group className="mb-3" controlId={`input-${name}`}>
      <Form.Label>{title}</Form.Label>
      <Form.Select name={name} value={value} onChange={onChange}>
        <option value="">Seleccione una opción</option>
        {listOption.map(({ value, name }) => (
          <option value={value} key={value}>{name}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
