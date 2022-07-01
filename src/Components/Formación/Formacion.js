import { Component } from "react";
import SENA from "../../img/SENA.png";
import Politecnico from "../../img/Politecnico.png";
import Udemy from "../../img/Udemy.png";
import SheWorks from "../../img/SheWorks.png";
import "./Formacion.css";

export default class Formacion extends Component {
  state = {
    SENA: false,
    Politecnico: false,
    Udemy: false,
    SheWorks: false,
    visible: false,
    btn: 'Abrir'
  };

  openWindow = (e) => {
    if (e === 1) {
      this.setState({ SENA: true });
      this.setState({ Politecnico: false });
      this.setState({ Udemy: false });
      this.setState({ SheWorks: false });
    } else if (e === 2) {
      this.setState({ SENA: false });
      this.setState({ Politecnico: true });
      this.setState({ Udemy: false });
      this.setState({ SheWorks: false });
    } else if (e === 3) {
      this.setState({ SENA: false });
      this.setState({ Politecnico: false });
      this.setState({ Udemy: true });
      this.setState({ SheWorks: false });
    } else {
      this.setState({ SENA: false });
      this.setState({ Politecnico: false });
      this.setState({ Udemy: false });
      this.setState({ SheWorks: true });
    }
  };

  changeVisible = () => {
    this.setState({ visible: !this.state.visible });

    if(!this.state.visible){
    this.setState({btn : 'Cerrar'})
  }
  else{    this.setState({btn : 'Abrir'})}
    this.setState({ SENA: false });
    this.setState({ Politecnico: false });
    this.setState({ Udemy: false });
    this.setState({ SheWorks: false });
  };

  render() {
    return (
      <div className="titleFormación">
        <div className="list">
          {this.state.visible && (
            <ul id="logosMenu">
              <li
                onClick={() => {
                  this.openWindow(1);
                }}
                className="logo sena"
              >
                <button id="btnCurso">SENA</button>
              </li>
              <li
                onClick={() => {
                  this.openWindow(2);
                }}
                className="logo pequeño"
              >
                <button id="btnCurso">Politécnico</button>
              </li>
              <li
                onClick={() => {
                  this.openWindow(3);
                }}
                className="logo"
              >
                <button id="btnCurso">Udemy</button>
              </li>
              <li
                onClick={() => {
                  this.openWindow(4);
                }}
                className="logo pequeño"
              >
                <button id="btnCurso">SheWorks</button>
              </li>
            </ul>
          )}
          {this.state.visible && this.state.SENA && (
            <div id="FormacionSena">
                              <img src={SENA} alt="SENA Logo" />

              <h1>Servicio Nacional de Aprendizaje</h1>
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
          )}
          {this.state.visible && this.state.Politecnico && (
            <div>
              <div id="FormacionPolitecnico">
                <img src={Politecnico} alt="Politecnico Logo"></img>
                <h1>Politécnico de Colombia</h1>
                <h3>Diplomado de programación en JAVA</h3>
                <br></br>
                <h3>Cursos destacados:</h3>
                <p>
                  Estructuras de datos | Programación orientada a objetos | Java
                  Web
                </p>
              </div>
            </div>
          )}
          {this.state.visible && this.state.Udemy && (
            <div>
              <div id="FormacionUdemy">
                <img src={Udemy} alt="Udemy Logo"></img>

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
            </div>
          )}
          {this.state.visible && this.state.SheWorks && (
            <div>
              <div id="FormacionSheWorks">
              <img src={SheWorks} alt="SheWorks Logo"></img>
              
              <h3>
                Análisis de datos con perpectiva ética
              </h3>
              <br></br>
              <h3>Cursos destacados:</h3>
              <p>
                Fundamentos de analíticas de datos | Análisis Exploratorio de Datos | Herramientas tecnológicas y éticas para el Análisis de Datos
              </p>
            </div>
            </div>
          )}

          <div>
            {!this.state.visible && (
              <div id="subtitle">
                <h1>FORMACION</h1>
                <h2>¡Dele un vistazo a mis estudios!</h2>
              </div>
            )}
            <button id="btnFormacion" onClick={this.changeVisible}>
              {this.state.btn}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
