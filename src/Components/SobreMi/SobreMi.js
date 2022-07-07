import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "./SobreMi.css";
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
            <div className="img0"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img4"></div>
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
            <div className="img2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img5"></div>
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
            <div className="img3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img6"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
