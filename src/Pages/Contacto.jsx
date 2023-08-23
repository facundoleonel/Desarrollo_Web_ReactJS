import React, { useState } from "react";

import { Form, Button, Card, Table} from "react-bootstrap" ;

export const Contacto = () => {

  const [tab, setTab]=useState({nombre:'', correo:'', mensaje:''});

  function Informacion(){
    alert(JSON.stringify(tab));
}

  return (
    <>
      <h5 className="text-center mt-3">Contacto</h5> <hr />
      <div className="container">
        <div className="row align-items-start">
          <h3 className="title">Correos Electrónicos Institucionales</h3>
          <div className="col">
            <h5 className="title">Secretaría de Extensión Universitaria</h5>
            <p>informes.fcad@uner.edu.ar</p>
            <h5 className="title">Oficina de Becas</h5>
            <p>estudiantes.fcad@uner.edu.ar</p>
          </div>
          <div className="col">
            <h5 className="title">Oficina de Ciencia y Técnica</h5>
            <p>oficinacyt.fcad@uner.edu.ar</p>
            <h5 className="title">Oficina de Pasantías</h5>
            <p>pasantias.fcad@uner.edu.ar</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Body>
                <Card.Title>Envianos tu consulta</Card.Title>

                <Form onSubmit={Informacion}>
                  <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setTab({ ...tab, nombre: e.target.value })
                      }
                    />
                    <Form.Text className="text-muted">
                      No compartiremos tu correo.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCorreo">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) =>
                        setTab({ ...tab, correo: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      onChange={(e) =>
                        setTab({
                          ...tab,
                          mensaje: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
