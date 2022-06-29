import { Component } from 'react';
import './Competencias.css';

export default class Competencias extends Component{

    state = {
        btn : "¡Sorpréndete!",
        visible : false
    }

    click = () => {
        this.setState({visible : !this.state.visible});
        if(!this.state.visible){this.setState({btn:"Cerrar"})}
        else{this.setState({btn:"¡Sorpréndete!"})}
    }


    render(){
    return(
        <div className="competenciasContenedor">
            {this.state.visible&&<div className='competenciasVideos'>
                <iframe id="video" width="400" height="225" src='https://www.youtube.com/embed/21X5lGlDOfg' title='La NASA en vivo' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe id="video" width="400" height="225" src="https://www.youtube.com/embed/DnrmpgKJPsY" title='Robots de Boston Dynamics' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe id="video" width="400" height="225" src="https://www.youtube.com/embed/_UTTGLB_UUU" title="Nuestro agujero negro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>}
            <div className='competenciasDescription'>
            {!this.state.visible&&<div className="titleCompetencias"><h1>¿Considera la proactividad</h1>
            <h2> una cualidad importante?</h2></div>}
                {this.state.visible&&<p>En mi opinión personal, considero la proactividad una cualidad importante, por lo cual me he esforzado por desarrollarla junto con otras como ser autodidacta, curiosa, perseverante y adaptable! También debo admitir que un factor vital para su desarrollo ha sido la pasión y fascinación que siento por la ciencia y la tecnología. Entre mis aficiones se encuentran la astronomía, la inteligencia artificial y la física de partículas, amo enterarme de las novedades del universo y de los avances tecnológicos que nos ayudan a descubrirlas.</p>}
            </div>
            <button onClick={this.click} id='btnCompetencias'>{this.state.btn}</button>

        </div>
    )}
}