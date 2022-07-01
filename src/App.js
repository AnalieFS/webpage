import './App.css';
import Competencias from './Components/Competencias/Competencias';
import Contacto from './Components/Footer/Contacto';
import Experiencia from './Components/Experiencia/Experiencia';
import Lenguajes from './Components/Lenguajes/Lenguajes';
import Nav from './Components/Nav/Nav';
import Privacidad from './Components/Privacidad/Privacidad';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SobreMi from './Components/SobreMi/SobreMi';
import Formacion from './Components/Formacion/Formacion';
import Politecnico from './Components/Formacion/Academia/Politecnico/Politecnico';


function App() {
  return (
    <>
    <Nav></Nav>
    <SobreMi></SobreMi>
    <Formacion></Formacion>
    <Lenguajes></Lenguajes>
    <Competencias></Competencias>
    <Experiencia></Experiencia>
    <Contacto></Contacto>
    <BrowserRouter>
    <Routes>
    <Route className="encima" path='/' element={<></>}/>
    <Route path='/PoliticaPrivacidad' element={<Privacidad/>}/>
    <Route path='/Formacion' element={<Politecnico/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
