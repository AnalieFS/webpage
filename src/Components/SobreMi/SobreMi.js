import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "./SobreMi.css";
import img1 from "../../img/Slider/100%/1.png";
import img2 from "../../img/Slider/100%/2.png";
import img3 from "../../img/Slider/100%/3.png";
import img4 from "../../img/Slider/100%/4.png";
import img5 from "../../img/Slider/100%/5.png";
import img6 from "../../img/Slider/100%/6.png";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default class SobreMi extends Component {
  state = {
    active: false,
    buttonText: "VER MÁS",
    widthSize: window.innerWidth,
  };

  render() {
    return (
      <div className="SobreMiBackground">
        <Swiper
          effect={"flip"}
          loop={true}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className="img1Slider"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img4Slider"></div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          effect={"flip"}
          loop={true}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className="img2Slider"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img5Slider"></div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          effect={"flip"}
          loop={true}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className="img3Slider"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img6Slider"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
