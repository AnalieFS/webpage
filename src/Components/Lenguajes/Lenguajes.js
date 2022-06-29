import "./Lenguajes.css";
import React, { Component } from "react";

export default class Lenguajes extends Component {
  state = {
    btn: "Abrir",
    visible: false,
  };

  changeVisible = () => {
    if (this.state.btn === "Abrir") {
      this.setState({ visible: true });
      this.setState({ btn: "Cerrar" });
    } else {
      this.setState({ visible: false });
      this.setState({ btn: "Abrir" });
    }
  };
  render() {
    return (
      <div className="lenguajesContainer">
        {this.state.visible && (
          <div className="herramientas">
            <div className="python">
              <h1>Python</h1>
              <h2>Avanzado</h2>
            </div>
            <div className="java">
              <h1>Java</h1>
              <h2>Avanzado</h2>
            </div>
            <div className="javascript">
              <h1>JavaScript</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="html">
              <h1>HTML</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="css">
              <h1>CSS</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="mysql">
              <h1>MySQL</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="heidisql">
              <h1>HeidiSQL</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="postgresql">
              <h1>Postgresql</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="docker">
              <h1>Docker</h1>
              <h2>Básico</h2>
            </div>
            <div className="react">
              <h1>React JS</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="node">
              <h1>Node JS</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="typescript">
              <h1>TypeScript</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="linux">
              <h1>Linux</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="vs">
              <h1>VS</h1>
              <h2>Avanzado</h2>
            </div>
            <div className="vscode">
              <h1>VS Code</h1>
              <h2>Avanzado</h2>
            </div>
            <div className="pycharm">
              <h1>PyCharm</h1>
              <h2>Intermedio</h2>
            </div>
            <div className="git">
              <h1>Github</h1>
              <h2>Básico</h2>
            </div>
          </div>
        )}
        {!this.state.visible && (
          <div className="titleLenguajes">
            <h1 id="lyh">Lenguajes,</h1>
            <h2 id="lyh2"> herramientas y nivel de dominio</h2>
          </div>
        )}
        <div className="btnLenguajes">
          <button onClick={this.changeVisible}>{this.state.btn}</button>
        </div>
      </div>
    );
  }
}
