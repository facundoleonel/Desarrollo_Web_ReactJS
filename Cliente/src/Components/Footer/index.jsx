import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
          <h6>Enlaces útiles</h6> <hr/>
          </div>
          <div className="col">
          <h6>Acceso a Redes</h6> <hr/>
          </div>
          <div className="col">
            <h6>Facultad de Ciencias de la Administración</h6> <hr/>
            <p>
              Monseñor Tavella 1424. Concordia. CP(3200). | Provincia de Entre
              Ríos Teléfono: (+54) (345) 4231400 – Fax: (+54) (345) 4231410 |
              E-mail.: informes.fcad@uner.edu.ar
            </p>
          </div>
        </div>
      </div>
      <div className="footer text-center">
        <p>
          FACULTAD DE CIENCIAS DE LA ADMINISTRACIÓN - UNIVERSIDAD NACIONAL DE
          ENTRE RÍOS
        </p>
      </div>
    </footer>
  );
}

export { Footer };
