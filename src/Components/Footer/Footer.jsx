import './footer.css';

function Footer (){
    return (
        <footer>
            <div className="superior text-center">
                <div className="row align-items-start">
                    <div className="col">
                    Compras y Contrataciones
                    </div>
                    <div className="col">
                    Consejo Directivo
                    </div>
                    <div className="col">
                    Concurso Docente
                    </div>
                    <div className="col">
                    Reválidas Docentes
                    </div>
                    <div className="col">
                    Concursos PAYS
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                    Marcelo Romero
                    </div>
                    <div className="col">
                    Gabriela Bejarano
                    </div>
                    <div className="col">
                    Facundo Leonel Panozzo
                    </div>
                </div>
            </div>
            <div className='footer text-center'>
                <p>FACULTAD DE CIENCIAS DE LA ADMINISTRACIÓN - UNIVERSIDAD NACIONAL DE ENTRE RÍOS</p>
            </div> 
        </footer>
    
    ); 
}

export {Footer};