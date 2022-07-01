import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import Politecnico from "./Academia/Politecnico/Politecnico";
import "./Formacion.css";

export default class Formacion extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      buttonText: "VER MÁS",
    };
  }

  handleClick = () => {
    window.location.href = "/Formacion";

  };

  render() {
    return (
      <div className="FormacionContainer">
        <div className="FormacionModulo1"></div>
          {this.state.showModal && <div>
            <Politecnico></Politecnico>
            </div>}
        
        <div className="FormacionModulo2">
          {!this.state.showModal && <h1 id="FormacionTitulo">FORMACIÓN</h1>}
          <button id="FormacionBoton" onClick={this.handleClick}>
            <svg width="150px" height="50px" viewBox="0 0 150 50">
              <polyline points="149,1 149,49 1,49 1,1 149,1" />
              <polyline points="149,1 149,49 1,49 1,1 149,1" />
            </svg>
            {this.state.buttonText}
          </button>
        </div>
      </div>
    );
  }
}
