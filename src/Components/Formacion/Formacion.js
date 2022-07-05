import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import Politecnico from "./Academia/Politecnico/Politecnico";
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
