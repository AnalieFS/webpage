/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import OpenClose from "../../img/Extends.svg";
import close from "../../img/close.svg";
import "./Nav.css";

export default class Nav extends Component {
  state = {
    toggleMenu: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    animate: false,
  };

  toggleNav = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
    console.log(this.state.toggleMenu);
  };

  scroll = (y) => {
     window.scroll(0, y);    
     this.setState({ toggleMenu: !this.state.toggleMenu });
    };

  render() {
    return (
      <header>
        <div className="backOfNav"></div>
        {(!this.state.toggleMenu || this.state.screenWidth > 500) && (
          <a id="aNav" href="/">
            <h1>Analie Flórez Sánchez</h1>
            <h2>Desarrollo Full Stack</h2>
          </a>
        )}
        <nav className="navBar">
          <button onClick={this.toggleNav} id="btnNavBar">
            {!this.state.toggleMenu && (
              <img src={OpenClose} alt="Extends button"></img>
            )}
            {this.state.toggleMenu && (
              <img src={close} alt="Extends button"></img>
            )}
          </button>
          {(this.state.screenWidth > 1060 || this.state.toggleMenu) && (
            <ul className="icons">
              <div
                className="iconsDiv"
                onClick={() => this.scroll(0)}
              >
                <li className="ListNav">
                  <h1>Sobre Mí</h1>
                </li>
              </div>
              <div
                className="iconsDiv"
                onClick={() => this.scroll(this.state.screenHeight)}
              >
                <li className="ListNav">
                  <h1>Formación</h1>
                </li>
              </div>
              <div
                className="iconsDiv"
                onClick={() => this.scroll(this.state.screenHeight * 2)}
              >
                <li className="ListNav">
                  <h1>Lenguajes</h1>
                </li>
              </div>
              <div
                className="iconsDiv"
                onClick={() => this.scroll(this.state.screenHeight * 3)}
              >
                <li className="ListNav">
                  <h1>Competencias</h1>
                </li>
              </div>
              <div
                className="iconsDiv"
                onClick={() => this.scroll(this.state.screenHeight * 4)}
              >
                <li className="ListNav">
                  <h1>Experiencia</h1>
                </li>
              </div>
              {this.state.screenWidth <= 500 && (
                <a href="/">
                  <li className="ListNav Name">
                    <h3>Analie Flórez Sánchez</h3>
                    <h4>Desarrollo Full Stack</h4>
                  </li>
                </a>
              )}
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
