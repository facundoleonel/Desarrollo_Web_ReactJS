import {Header} from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

import './App.css';
import { FrontLayout } from './Layout/FrontLayout';

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
      {/* <Header/> */}
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
