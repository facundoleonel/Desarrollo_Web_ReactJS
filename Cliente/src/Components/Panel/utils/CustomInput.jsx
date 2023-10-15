import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomInput = ({title,name,type, value, onChange}) => {
  return (
    <Form.Group className="mb-3" controlId={`input-${name}`}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        required
      />
    </Form.Group>
  )
}
