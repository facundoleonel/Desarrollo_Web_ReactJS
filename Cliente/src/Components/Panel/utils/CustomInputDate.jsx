import React from "react";
import { Form } from "react-bootstrap";

export const CustomInputDate = ({
  title,
  name,
  value,
  onChange
}) => {
  const d = new Date(Date.now())
  const year = d.getFullYear();
  const maxDate = `${year - 18}-12-31`
  return (
    <Form.Group className="mb-3" controlId={`input-${name}`}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        min="1970-12-31"
        max={maxDate}
        type="date"
        name={name}
        value={value || ""}
        onChange={onChange}
        required
      />
    </Form.Group>
  );
};
