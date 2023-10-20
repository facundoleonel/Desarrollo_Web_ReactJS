import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { SectionTitle } from '../../Layout/SectionTitle'
import { Inscripcion } from '../../Components/Panel/Inscripcion'

export const Inscripciones = () => {
  return (
    <>
      <Container className="mt-5 mb-4">
        <Col xs={12}>
          <SectionTitle title='Panel Inscripciones' />
          <Inscripcion />
        </Col>
      </Container>
    </>
  )
}
