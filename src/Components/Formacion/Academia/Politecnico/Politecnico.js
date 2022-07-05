import React from "react";
import Sena from '../../../../img/SENA.png'
import "./Politecnico.css";

export default function Politecnico() {
  return (
    <div className="AcademiaContainer">
      <div className="Modulo1">
        <h1>
          <i>Formación académica</i>
        </h1>
        <div className="Sena">
        <img src={Sena} alt="SENA Logo" />
              <h3>
                Tecnólogo en análisis y desarrollo de sistemas de información
                (ADSI)
              </h3>
              <br></br>
              <h3>Cursos destacados:</h3>
              <p>
                Requisitos Funcionales y no Funcionales | JAVA | Bases de Datos
                | Algoritmos avanzados (JAVA)
              </p>
        </div>
        <div className="Udemy">
          <h1>Udemy</h1>
        <h3>Universidad Python</h3>
                <h3>Universidad JavaScript</h3>
                <br></br>
                <h3>Cursos destacados:</h3>
                <p>
                  Programación orientada a objetos | Postgresql | Tkinter |
                  PySide | Django | Flask | Arrow Functions | Manejo del DOM
                  HTML con JavaScript
                </p>
        </div>
        <div></div>
      </div>
      <div className="Modulo2">
      <h1>
          <i>Formación académica</i>
        </h1>
      </div>
      <div className="Modulo3">
      <h1>
          <i>Lenguajes y herramientas</i>
        </h1>
      </div>
      <div className="Modulo4">
      <h1>
          <i>Lenguajes y herramientas</i>
        </h1>
      </div>
      </div>
  );
}
