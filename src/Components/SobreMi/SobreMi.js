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
    buttonText: "VER MÁS"
  };

  visible = () => {
    if(this.state.active === false){
        this.setState({active : true})
        this.setState({buttonText : "VER MENOS"})
    }
    else{
        this.setState({active : false})
        this.setState({buttonText : "VER MÁS"})
    }
  };


  render() {
    return (
      <div className="SobreMiBackground">
        <div className="SobreMiModulo1">
          {this.state.active &&(<div className="horizontalSwipper">
            <Swiper
              onSlideChange={this.active}
              id="swipper"
              loop={true}
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              navigation={true}
              pagination={{
                clickable: true,
                type: "progressbar",
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
              <SwiperSlide>
                <div className="img7"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img8"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img9"></div>
              </SwiperSlide>
            </Swiper>
          </div>)}
        </div>
        <div className="SobreMiModulo2">
          {!this.state.active&&(<h1 id="SobreMiTitulo">SOBRE MÍ</h1>)}
          <button id="SobreMiBoton" onClick={this.visible}><svg width="150px" height="50px" viewBox="0 0 150 50" class="border">
          <polyline points="149,1 149,49 1,49 1,1 149,1" class="bg-line" />
          <polyline points="149,1 149,49 1,49 1,1 149,1" class="hl-line" />
           </svg>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}
