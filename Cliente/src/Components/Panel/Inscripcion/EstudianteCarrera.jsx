import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { CustomSelect } from '../utils/CustomSelect'

export const EstudianteCarrera = ({ estudiantes, carreras, form, onSubmit, onChange }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5">Estudiante Carrera</Card.Header>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          {estudiantes.length > 0 && <CustomSelect
            title="Estudiante"
            name="estudiante"
            value={form?.estudiante || ""}
            onChange={onChange}
            listOption={estudiantes}
          />}
          {carreras.length > 0 && <CustomSelect
            title="Carrera"
            name="carrera"
            value={form?.carrera || ""}
            onChange={onChange}
            listOption={carreras}
          />}
          <Button type='submit'>Continuar</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
