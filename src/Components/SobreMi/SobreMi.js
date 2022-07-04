import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import "./SobreMi.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default class SobreMi extends Component {
  state = {
    active: false,
    buttonText: "VER MÁS",
  };

  visible = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
      this.setState({ buttonText: "VER MENOS" });
    } else {
      this.setState({ active: false });
      this.setState({ buttonText: "VER MÁS" });
    }
  };

  render() {
    return (
      <div className="SobreMiBackground">
        <div className="SobreMiModulo1">
            <div className="horizontalSwipper">
              <Swiper
                id="swipper"
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
                <SwiperSlide>
                  <div className="img1"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img2"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img3"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img4"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img5"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img6"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          
        </div>
      </div>
    );
  }
}
