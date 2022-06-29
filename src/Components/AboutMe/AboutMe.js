import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "./AboutMe.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class AboutMe extends Component {
  state = {
    visible: false,
    btn: "Abrir",
  };

  changeVisible = () => {
    this.setState({ visible: !this.state.visible });

    if (!this.state.visible) {
      this.setState({ btn: "Cerrar" });
    } else {
      this.setState({ btn: "Abrir" });
    }
  };

  render() {
    return (
      <div className="AboutMeContainer">
        {this.state.visible && (
          <Swiper
            className="sliderContainer"
            loop={true}
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide className="slider">
              <div className="slide1"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide2"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide3"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide4"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide5"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide6"></div>
            </SwiperSlide>
          </Swiper>
        )}
        {!this.state.visible && (
          <div id="AboutMe">
            <h1>SOBRE MI</h1>
          </div>
        )}
        <div className="btnAboutMe">
          <button onClick={this.changeVisible}>{this.state.btn}</button>
        </div>
      </div>
    );
  }
}
