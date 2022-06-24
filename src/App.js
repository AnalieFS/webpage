import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Competencias from './Components/Competencias/Competencias';
import Contacto from './Components/Footer/Contacto';
import Experiencia from './Components/Experiencia/Experiencia';
import Formacion from './Components/Formación/Formacion';
import Lenguajes from './Components/Lenguajes/Lenguajes';
import Nav from './Components/Nav/Nav';
import Privacidad from './Components/Privacidad/Privacidad';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <Nav></Nav>
    <AboutMe></AboutMe>
    <Formacion></Formacion>
    <Lenguajes></Lenguajes>
    <Competencias></Competencias>
    <Experiencia></Experiencia>
    <Contacto></Contacto>
    <BrowserRouter>
    <Routes>
    <Route className="encima" path='/' element={<></>}/>

    <Route path='/PoliticaPrivacidad' element={<Privacidad/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
