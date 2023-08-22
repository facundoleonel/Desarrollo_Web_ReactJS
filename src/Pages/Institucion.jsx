import React from "react";

export const Institucion = () => {
  return (
    <>
      <h2 className="title text-center">Institucion</h2>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h4 className="text-center">Valores</h4>
              <h5>Calidad académica</h5>
              <p>
                Búsqueda permanente de un elevado nivel académico científico y
                compromiso con la generación de nuevos conocimientos y su
                transferencia.
              </p>
              <h5>Honestidad y transparencia</h5>
              <p>
                La institución promueve la honestidad en el desempeño de todos
                sus miembros y la transparencia en la gestión.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="p-3">Custom column padding</div>
          </div>
        </div>
      </div>
    </>
  );
};
