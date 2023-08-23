import React from "react";

export const Contacto = () => {
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
    </>
  );
};
