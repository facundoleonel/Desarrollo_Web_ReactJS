import React from 'react'
import { Card } from 'react-bootstrap'

export const EstudianteMateria = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header as="h5"> Estudiante Materia </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
