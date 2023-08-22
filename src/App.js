import './App.css';
import { FrontLayout } from './Layout/FrontLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { Institucion } from './Pages/Institucion';
import { Contacto } from './Pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <FrontLayout>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/institucion' element={<Institucion/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </FrontLayout>
    </BrowserRouter>
  );
}

export default App;
