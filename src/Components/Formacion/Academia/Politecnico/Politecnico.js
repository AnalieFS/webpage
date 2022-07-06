import { render } from "@testing-library/react";
import React, { Component } from "react";
import Sena from "../../../../img/SENA.png";
import Udemy from "../../../../img/Udemy.png";
import Poli from "../../../../img/Politecnico.png";
import SheWorks from "../../../../img/SheWorks.png";
import Contacto from "../../../Footer/Contacto";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Scrollbar } from "swiper";
import "./Politecnico.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default class Politecnico extends Component {
  state = {
    modulo1: false,
    modulo1Btn: "VER MÁS",
    modulo2: false,
  };

  Modulo1 = () => {
    this.setState({ modulo1: !this.state.modulo1 });
    if (!this.state.modulo1) {
      this.setState({ modulo1Btn: "VER MENOS" });
    } else {
      this.setState({ modulo1Btn: "VER MÁS" });
    }
  };

  render() {
    return (
      <div className="AcademiaContainer">
        <div className="Modulo1">
          <h1>
            <i>Formación académica</i>
          </h1>
          {this.state.modulo1 && (
            <div className="Modulo1Div">
              <div className="Sena">
                <div className="SenaLogo">
                  <img src={Sena} alt="SENA Logo" />
                </div>
                <div>
                  <h1>
                    Tecnólogo en análisis y desarrollo de sistemas de
                    información (ADSI)
                  </h1>
                  <h2>Cursos destacados:</h2>
                  <p>
                    Requisitos Funcionales y no Funcionales | JAVA | Bases de
                    Datos | Algoritmos avanzados (JAVA)
                  </p>
                </div>
              </div>
              <div className="Udemy">
                <div className="UdemyLogo">
                  <img src={Udemy} alt="Udemy Logo" />
                </div>
                <div>
                  <h1>Universidad Python</h1>
                  <h1>Universidad JavaScript</h1>
                  <h2>Cursos destacados:</h2>
                  <p>
                    Programación orientada a objetos | Postgresql | Tkinter |
                    PySide | Django | Flask | Arrow Functions | Manejo del DOM
                    HTML con JavaScript
                  </p>
                </div>
              </div>
            </div>
          )}
          <button onClick={this.Modulo1}>
            <h3>{this.state.modulo1Btn}</h3>
          </button>
        </div>
        <div className="Modulo2">
          <h1>
            <i>Formación académica</i>
          </h1>
          {this.state.modulo1 && (
            <div className="Modulo2Div">
              <div className="Politecnico">
                <div className="PolitecnicoLogo">
                  <img src={Poli} alt="Politécnico Logo" />
                </div>
                <div>
                  <h1>Diplomado de programación en JAVA</h1>
                  <h2>Cursos destacados:</h2>
                  <p>
                    Estructuras de datos | Programación orientada a objetos |
                    Java Web
                  </p>
                </div>
              </div>
              <div className="SheWorks">
                <div className="SheWorksLogo">
                  <img src={SheWorks} alt="SheWorks Logo" />
                </div>
                <div>
                  <h1>Análisis de datos con perpectiva ética</h1>
                  <h2>Cursos destacados:</h2>
                  <p>
                    Fundamentos de analíticas de datos | Análisis Exploratorio
                    de Datos | Herramientas tecnológicas y éticas para el
                    Análisis de Datos
                  </p>
                </div>
              </div>
            </div>
          )}
          <button onClick={this.Modulo1}>
            <h3>{this.state.modulo1Btn}</h3>
          </button>
        </div>
        <div className="Modulo3">
          <h1>
            <i>Lenguajes y herramientas</i>
          </h1>
          <Swiper
            effect={"coverflow"}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 1000,
              modifier: 1,
              slideShadows: true,
            }}
            scrollbar={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Scrollbar]}
            className="Modulo3Swipper"
          >
            <SwiperSlide>
              <div className="img1Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img2Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img3Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img4Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img5Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img6Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img7Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img8Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img9Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img10Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img11Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img12Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img13Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img14Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img15Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img16Formacion"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img17Formacion"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Modulo4">
          <h1>
            <i>Competencias</i>
          </h1>
          <div className="Modulo4Div">
            <div className="competenciasVideos">
              <iframe
                id="video"
                width="400"
                height="200"
                src="https://www.youtube.com/embed/21X5lGlDOfg"
                title="La NASA en vivo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                id="video"
                width="400"
                height="200"
                src="https://www.youtube.com/embed/DnrmpgKJPsY"
                title="Robots de Boston Dynamics"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                id="video"
                width="400"
                height="200"
                src="https://www.youtube.com/embed/_UTTGLB_UUU"
                title="Nuestro agujero negro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="CompetenciasTexto">
              <p>
                La curiosidad es el motor de las buenas ideas, ¿No lo crees?...
                la curiosidad puede impulsar muchas cualidades que son
                fundamentales para llevarlas a cabo de la mejor forma y
                eficientemente, entre éstas cualidades están la autonomía,
                proactividad, el ser autodidacta e incluso el aprender que los
                proyectos se construyen más fácil en equipo y con
                responsabilidades fijas.
                <br />
                <br />
                Todo lo anterior lo he entendido con el tiempo gracias a la
                curiosidad que siento por todo lo que me rodea y en función de
                esto, comprendiendo en su debido momento que hubo cosas que no
                sabía hacer y que con la debida asesoría o su estudio podía
                aprenderlo... después de todo la programación es un área que
                cubre muchos campos, desde el lógico hasta el creativo y es por
                ello que se pueden dificultar algunas cosas en ciertos momentos.
                <br />
                <br />
                El informarme constantemente sobre las novedades que ofrece la
                ciencia y la tecnología me hizo desarrollar un profundo
                entendimiento de que a diario se desarrollan nuevos
                conocimientos y se descubren diferentes maneras de hacer las
                cosas, ésto me convirtió en una persona humilde... humilde con
                el conocimiento, con lo que sé y con lo que no sé, me hizo
                generar consciencia sobre lo grande que es el mundo y lo
                constructivos que podemos ser si direccionamos de manera
                adecuada nuestros saberes y tratamos de manera consecuente a las
                personas, con la disposición de enseñarles pero también de
                aprender de ellas.
              </p>
            </div>
          </div>
        </div>
        <Contacto></Contacto>
      </div>
    );
  }
}
