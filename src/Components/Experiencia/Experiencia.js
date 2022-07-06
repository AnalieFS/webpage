import { Component } from "react";
import "./Experiencia.css";
import flecha from "../../img/flecha.png";
import x from "../../img/x.png";

export default class Experiencia extends Component {
  state = {
    visible: false,
    kapriche: false,
    checkmyvehicle: false,
    tracker: false,
    webpage: false,
    buttonState: "ABRIR",
  };

  buttons = () => {
    this.setState({ visible: !this.state.visible });
    if (!this.state.visible) {
      this.setState({ buttonState: "CERRAR" });
    } else {
      this.setState({ buttonState: "ABRIR" });
    }
    this.setState({ kapriche: false });
    this.setState({ checkmyvehicle: false });
    this.setState({ tracker: false });
    this.setState({ webpage: false });
  };

  moduleOpen = (e) => {
    if (e === 1) {
      this.setState({ kapriche: true });
      this.setState({ checkmyvehicle: false });
      this.setState({ tracker: false });
      this.setState({ webpage: false });
    } else if (e === 2) {
      this.setState({ kapriche: false });
      this.setState({ checkmyvehicle: true });
      this.setState({ tracker: false });
      this.setState({ webpage: false });
    } else if (e === 3) {
      this.setState({ kapriche: false });
      this.setState({ checkmyvehicle: false });
      this.setState({ tracker: true });
      this.setState({ webpage: false });
    } else {
      this.setState({ kapriche: false });
      this.setState({ checkmyvehicle: false });
      this.setState({ tracker: false });
      this.setState({ webpage: true });
    }
  };

  render() {
    return (
      <div className="experienciaContainer">
        <div className="ExperienciaModulo1">
          {!this.state.visible && (
            <img onClick={this.buttons} src={flecha} alt="Abrir submenú" />
          )}
          {this.state.visible && (
            <img onClick={this.buttons} src={x} alt="Cerrar submenú" />
          )}

          {!this.state.visible && <h1 onClick={this.buttons}>EXPERIENCIA</h1>}
          {this.state.visible && (
            <div className="buttonsExperiencia">
              <button
                onClick={() => {
                  this.moduleOpen(1);
                }}
              >
                KAPRICHE
              </button>
              <button
                onClick={() => {
                  this.moduleOpen(2);
                }}
              >
                CHECK MY VEHICLE
              </button>
              <button
                onClick={() => {
                  this.moduleOpen(3);
                }}
              >
                VEHICLE TRACKER
              </button>
              <button
                onClick={() => {
                  this.moduleOpen(0);
                }}
              >
                WEBPAGE
              </button>
            </div>
          )}
        </div>

        <div className="ExperienciaModulo2">
          {this.state.kapriche && (
            <div className="experiencia">
              <h1>Software Contable Kapriche</h1>
              <h2>Analista de requerimientos y programadora | 2019</h2>
              <p>
                Proyecto desarrollado durante el estudio de Análisis y
                Desarrollo de Sistemas de Información, abarcando el análisis de
                requerimientos, el análisis de requisitos funcionales y no
                funcionales, diseño, implementación y documentación de la
                aplicación nativa encargada de administrar roles para diversos
                tipos de usuarios y movimientos contables que implicó la
                migración de información de origen manual a digital.
                <br />
                Desarrollada por medio de JAVA, MySQL y StarUML.
              </p>
            </div>
          )}
          {this.state.checkmyvehicle && (
            <div className="experiencia">
              <h1>Check My Vehicle</h1>
              <h2>Programadora y tester | 2022</h2>
              <p>
                Este proyecto consistió en un desarrollo Full Stack que implicó
                la creación de una Web api RestFul que almacena y administra
                información de revisión de vehículos y personal técnico, para
                ello se creó una base de datos que cumpliera con los principios
                ACID, el backend fue desarrollado en ASP.NET Core, el frontend
                en React JS, haciendo uso de MySQL y desplegándola en IIS.
              </p>
            </div>
          )}
          {this.state.tracker && (
            <div className="experiencia">
              <h1>Vehicle Tracker</h1>
              <h2>Programadora | 2022</h2>
              <p>
                Proyecto Full Stack que consistió en la construcción de una Web
                api desarrollada con herramientas como GraphQL, ASP.NET Core,
                Node JS, React JS, Docker y MySQL.
                <br />
                <br />
                Se construyeron microservicios con protocolo SOAP para la
                creación, almacenamiento y actualización de un link temporal que
                permite visualizar la información de un vehículo en tiempo real.
                <br />
                <br />
                El id de éste vehículo y tiempo de duración del link son
                ingresados por medio del playground de GraphQL que se encuentra
                programado en Node JS haciendo uso de TypeScript y la
                información de ubicación y eventos del vehículo se recibe por
                medio de un cliente construido para facilitar la comunicación
                por medio del protocolo SOAP, ésta se obtiene por medio de
                microservicios previamente creados en la compañía.
                <br />
                <br />
                Finalmente todo lo anterior se ve reflejado en el frontend
                desarrollado en React JS permitiendo visualizar la ubicación en
                tiempo real del vehículo en el mapa que hace uso de la API de
                Google Maps, mostrando hora de último reporte y detalles del
                vehículo y actualizando el heading del marcador.
                <br />
                <br />
                Por último, se realiza el despliegue con la ayuda de Docker,
                tanto del Microservicio como del Backend y del Frontend.
              </p>
            </div>
          )}
          {this.state.webpage && (
            <div className="experiencia">
              <h1>WebPage</h1>
              <h2>Analista de requerimientos y programadora | 2022</h2>
              <p>
                Esta página web fue programada con el fin de virtualizar de una
                forma personalizada mi curriculum vitae.
                <br />
                <br />
                Su trabajo fue más que todo usando React JS, CSS y HTML aunque
                también quise añadir un poco más de lógica poniendo un pequeño
                formulario que se comunica directamente con un servicio creado
                en Node JS que almacena datos de contacto en una base de datos.
                <br />
                <br />
                Es una verdadera lástima que todos los demás proyectos tengan un
                grado de confidencialidad que me impide mostrar su código, sin
                embargo,
                <i><a href="https://github.com/AnalieFS/webpage" rel="noreferrer" target="_blank">
                  ¡éste repo sí te lo puedo compartir!
                </a>
                </i>
                <br />
                <br />
                ¡Espero que tu estadía en ésta página web haya sido de tu agrado!.
               </p>
              
            </div>
          )}
        </div>
      </div>
    );
  }
}
