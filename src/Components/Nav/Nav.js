/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import OpenClose from "../../img/Extends.svg";
import "./Nav.css";

export default class Nav extends Component {
    state = {
        toggleMenu: false,
        screenWidth: window.innerWidth,
        animate : false,
    };

    toggleNav = () => {
        this.setState({animate:true})
        this.setState({ toggleMenu: !this.state.toggleMenu });
    };

    scroll = (y) => {
        console.log(y);
        window.scroll(y, y);
    };

    render() {
        return (
            <header>
                {(this.state.screenWidth > 500) &&<div className="backOfNav"></div>}
                <a id="aNav" href="/">
                    <h1>Analie Flórez Sánchez</h1>
                    <h2>Desarrollo Full Stack</h2>
                </a>
                <nav className="navBar">
                    <button onClick={this.toggleNav} id="btnNavBar">
                        <img src={OpenClose} alt="Extends button"></img>
                    </button>
                    {(this.state.screenWidth > 1060 || this.state.toggleMenu) && (
                        <ul className="icons"
                        >
                            <div
                                className="iconsDiv"
                                onClick={() => this.scroll(window.innerHeight * 0)}
                            >
                                <li className="ListNav">
                                    <h1>Sobre Mí</h1>
                                </li>
                            </div>
                            <div
                                className="iconsDiv"
                                onClick={() => this.scroll(window.innerHeight)}
                            >
                                <li className="ListNav">
                                    <h1>Formación</h1>
                                </li>
                            </div>
                            <div
                                className="iconsDiv"
                                onClick={() => this.scroll(window.innerHeight * 2)}
                            >
                                <li className="ListNav">
                                    <h1>Lenguajes</h1>
                                </li>
                            </div>
                            <div
                                className="iconsDiv"
                                onClick={() => this.scroll(window.innerHeight * 3)}
                            >
                                <li className="ListNav">
                                    <h1>Competencias</h1>
                                </li>
                            </div>
                            <div
                                className="iconsDiv"
                                onClick={() => this.scroll(window.innerHeight * 4)}
                            >
                                <li className="ListNav">
                                    <h1>Experiencia</h1>
                                </li>
                            </div>
                        </ul>
                    )}
                </nav>
            </header>
        );
    }
}
