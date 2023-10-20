import React, { useState } from "react";
import { Card } from "react-bootstrap";

export const Inscripcion = () => {
  const [page, setPage] = useState(0);

  const handleNext = ()=>{
    setPage( page + 1 )
  }

  return (
    <>
    { page === 0 && 
        <Card style={{ width: "18rem" }}>
            <Card.Header as="h5">Seleccionar estudiante y carrera</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button onClick={handleNext}>Continuar</button>
          </Card.Body>
        </Card>
    }
    { page === 1 && 
        <Card style={{ width: "18rem" }}>
          <Card.Body>
          <Card.Header as="h5">Seleccionar estudiante y carrera</Card.Header>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    }
    </>
  )
};
