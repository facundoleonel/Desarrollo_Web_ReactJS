import React, { useEffect, useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { CustomInput } from '../utils/CustomInput'
import { getFechaActual } from '../../../Helpers/utils'
import { CustomSelect } from '../utils/CustomSelect'
import { crudCarrera, crudEstudiante } from '../../../Helpers/crud'



export const EstudianteCarrera = ({ estudiantes, carreras, form, onSubmit, onChange, onClick }) => {
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
