import "./App.css";
import Contacto from "./Components/Footer/Contacto";
import Experiencia from "./Components/Experiencia/Experiencia";
import Nav from "./Components/Nav/Nav";
import Privacidad from "./Components/Privacidad/Privacidad";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMi from "./Components/SobreMi/SobreMi";
import Formacion from "./Components/Formacion/Formacion";
import Academia from "./Components/Formacion/Academia/Componente/Academia";

function App() {
  return (
    <>
      <Nav></Nav>
      <SobreMi></SobreMi>
      <Formacion></Formacion>
      <Experiencia></Experiencia>
      <Contacto></Contacto>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/Formacion" element={<Academia />} />
          <Route path="/PoliticaPrivacidad" element={<Privacidad />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
