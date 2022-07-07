/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import send from "../../img/send.svg";
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
    ).then((response) => response.json()).then(()=>{
      this.setState({email : ""});
      this.setState({comment : ""});
      window.alert("¡Formulario enviado con éxito!");
    }
    );
  }

  render() {
    return (
      <footer className="footer">
        <div className="letsTalk">
          <h1>¡Hablemos!</h1>
          <h2>Envíe su correo y le contactaré lo antes posible</h2>
          <form className="form" onSubmit={this.onSubmit}>
            <div>
              <input type="email" required value= {this.state.email} onChange={this.emailChange} placeholder="Correo Electrónico"></input>
              <input type="text" required value= {this.state.comment} onChange={this.commentChange} placeholder="¿De qué quieres hablar?"></input>
              <button id="send" onClick={this.sendForm}>
                <img src={send} alt="enviar"></img>
              </button>
            </div>
            <div>
              <input required type="checkbox"></input>
              <label id="terminos">
                Acepto los términos y condiciones que puedo encontrar en las
                políticas de privacidad.
              </label>
            </div>
          </form>
        </div>
        <div className="menuFooter">
          <div className="tel">
            <h1>Escríbame</h1>
            <h2>(+57) 300 445 2451</h2>
          </div>
          <div className="line"></div>
          <div className="email">
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
