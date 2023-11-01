import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

export const ListInscripciones = ({ list = [] }) => {
  const [listado, setListado] = useState([]);
  useEffect(() => {
    if (list.length > 0) {
      setListado(list);
    }
  }, [list]);
  return (
    <>
      {listado.length > 0 && (
        <Accordion>
          {list.map((e, k) => (
            <Accordion.Item key={k} eventKey={k}>
              <Accordion.Header>{` ${e.nombre} ${e.apellido} - ${e.dni} `}</Accordion.Header>
              <Accordion.Body>
                  Inscripto en las materias de <strong>{`${e.carrera}`}</strong>
                <ul>
                  {listado.length > 0 &&
                    listado.map((el,ke)=>{
                      return String(listado[ke].materias).split(",").map( (e,k) => <li key={k}>{e}</li>)
                    })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </>
  );
};
