import './footer.css';

function Footer (){
    return (
        <footer>
            <div class="superior text-center">
                <div class="row align-items-start">
                    <div class="col">
                    Compras y Contrataciones
                    </div>
                    <div class="col">
                    Consejo Directivo
                    </div>
                    <div class="col">
                    Concurso Docente
                    </div>
                    <div class="col">
                    Reválidas Docentes
                    </div>
                    <div class="col">
                    Concursos PAYS
                    </div>
                </div>
            </div>

            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col">
                    Marcelo Romero
                    </div>
                    <div class="col">
                    Gabriela Bejarano
                    </div>
                    <div class="col">
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