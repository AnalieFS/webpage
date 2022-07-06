import { Component } from "react";
import "./Formacion.css";


export default class Formacion extends Component {

  handleClick = () => {
    window.location.href = "/Formacion";
  };

  render() {
    return (
      <div className="FormacionContainer">
        <button onClick={this.handleClick}>
          VER FORMACIÓN
        </button>
      </div>
    );
  }
}
