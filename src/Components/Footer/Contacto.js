/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import send from "../../img/send.svg";
import wp from '../../img/social/wp.svg';
import email from '../../img/social/mail.svg';
import "./Contacto.css";

export default class Contacto extends Component {
  state = {
    email: "",
    comment: "",
  };

  change = () => {
    window.location.href = "/PoliticaPrivacidad";
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  commentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        comment: this.state.comment,
      }),
    };
    fetch(
      "https://analieflorezsanchezcvbackend.herokuapp.com/api/contact",
      postData
    )
      .then((response) => response.json())
      .then(() => {
        this.setState({ email: "" });
        this.setState({ comment: "" });
        window.alert("¡Formulario enviado con éxito!");
      });
  };

  render() {
    return (
      <footer className="footer">
        <div className="letsTalk">
          <h1>¡Hablemos!</h1>
          <h2>Envía el siguiente formulario y te contactaré lo antes posible</h2>
          <form className="form" onSubmit={this.onSubmit}>
            <div id="TerminosYCondiciones0">
              <input
                type="email"
                required
                value={this.state.email}
                onChange={this.emailChange}
                placeholder="Correo Electrónico"
              ></input>
              <input
                type="text"
                required
                value={this.state.comment}
                onChange={this.commentChange}
                placeholder="Menciona el tema a tratar"
              ></input>
              <button id="send" onClick={this.sendForm}>
                <img src={send} alt="enviar"></img>
              </button>
            </div>
            <div id="TerminosYCondiciones">
              <input required type="checkbox"></input>
              <label id="terminos">
                Acepto los términos y condiciones que puedo encontrar en las
                políticas de privacidad que puedo encontrar al final de esta página.
              </label>
            </div>
          </form>
        </div>
        <div className="menuFooter">
          <div className="tel">
            <a  href="https://wa.link/dohv2i"
              target="_blank">
            <img src={wp} alt="WhatsApp Icon"/>
            <h1>Escríbame</h1>
            <h2>(+57) 300 445 2451</h2>
            </a>
          </div>
          <div className="line"></div>
          <div className="email">
          <img src={email} alt="Email Icon"/>
            <h1>Envíeme un correo</h1>
            <h2>analieflorezs@gmail.com</h2>
          </div>

          <div className="line"></div>
          <div className="redesSociales">
            <a href="https://www.instagram.com" target="_blank">
              <h2>INSTAGRAM</h2>
            </a>
            <a
              href="https://www.linkedin.com/in/analie-fl%C3%B3rez-s%C3%A1nchez/"
              target="_blank"
            >
              <h2>LINKEDIN</h2>
            </a>
            <a href="https://github.com/AnalieFS" target="_blank">
              <h2>GITHUB</h2>
            </a>
          </div>
        </div>
        <h2 className="privacidad" onClick={this.change}>
          POLÍTICAS DE PRIVACIDAD
        </h2>
      </footer>
    );
  }
}
