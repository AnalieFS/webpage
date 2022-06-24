import './AboutMe.css';
import AboutMeIMG from '../../img/AnaVerticalWeb.png';
import { Component } from 'react';

export default class AboutMe extends Component{

    state ={
        visible : false,
        btn : 'Abrir'
    }

    changeVisible = () => {
        this.setState({visible : !this.state.visible});
        this.setState({ visible: !this.state.visible });

        if(!this.state.visible){
        this.setState({btn : 'Cerrar'})
        }
        else{this.setState({btn : 'Abrir'})}
    }

render(){
    return(
            
            <div className='AboutMeContainer'>
                 {this.state.visible&&<img className='image' src={AboutMeIMG} alt='About Me'></img>}
                 {this.state.visible&&<p>
                     Desarrolladora Junior apasionada por la programación, 
                     motivada por construir soluciones que mejoren el 
                     desempeño y calidad de vida por medio del diseño e 
                     implementación de aplicaciones nativas y/o páginas 
                     web.
                <br/>
                <br/>
                     Me considero una persona bastante curiosa y en búsqueda
                     de aprender cosas nuevas todo el tiempo, me encanta encontrarme
                     con retos que impliquen desafíos intelectuales.
                     
                     </p>}
                {!this.state.visible&&<div id='AboutMe'>
                    <h1>Sobre mí</h1>
                    <h2>¡Soy la persona ideal para su empresa!</h2>
                </div>}
                <button id='btnAboutMe' onClick={this.changeVisible}>{this.state.btn}</button>
            </div>
    )
}}