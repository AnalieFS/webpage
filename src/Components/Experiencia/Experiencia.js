import { Component } from 'react';
import './Experiencia.css';

export default class Experiencia extends Component{
    
    state = {
        visible : false,
        kapriche : false,
        checkmyvehicle : false,
        tracker : false,
        buttonState : "Abrir"
    }

    buttons = () =>{
        this.setState({visible : !this.state.visible});
        if(!this.state.visible){
            this.setState({buttonState : "Cerrar"})
        }
        else{
            this.setState({buttonState : "Abrir"})
        }
        this.setState({kapriche : false});
        this.setState({checkmyvehicle : false});
        this.setState({ tracker : false});
    }

    moduleOpen = (e) => {
        
        if(e===1){
            this.setState({kapriche : true});
            this.setState({checkmyvehicle : false});
            this.setState({ tracker : false});
        }
        else if(e===2){
            this.setState({kapriche : false});
            this.setState({checkmyvehicle : true});
            this.setState({ tracker : false});

        }
        else{
            this.setState({kapriche : false});
            this.setState({checkmyvehicle : false});
            this.setState({ tracker : true});
        }

    }


    render(){
        return(
            <div className='experienciaContainer'>
                {!this.state.visible&&<div id="subtitleExperiencia">
                   <h1>EXPERIENCIA</h1>
                   <h2>Proyectos desarrollados y herramientas utilizadas.</h2>
                </div>}
                {this.state.visible&&<div className='buttonsExperiencia'>
                    <button onClick={()=>{this.moduleOpen(1)}}>Kapriche</button>
                    <button onClick={()=>{this.moduleOpen(2)}}>Check My Vehicle</button>
                    <button onClick={()=>{this.moduleOpen(0)}}>Vehicle Tracker</button>
                </div>}
                <button id='btnExperiencia' onClick={this.buttons}>{this.state.buttonState}</button>

                {this.state.kapriche&&
                <div className='experiencia'>
                    <h1>Software Contable Kapriche</h1>
                    <h2>Analista de requerimientos y programadora | 2019</h2>
                    <p>
                    Diseño, implementación y documentación de aplicación nativa encargada de administrar roles para diversos tipo de usuario y movimientos contables desarrollada por medio de JAVA, MySQL, StarUML.
                    </p>
                </div>}
                {this.state.checkmyvehicle&&
                <div className='experiencia'>
                    <h1>Check My Vehicle</h1>
                    <h2>Programadora y tester | 2022</h2>
                    <p>
                    Web api RestFul que almacena y administra información de revisión de vehículos y técnicos desarrollada en ASP.NET Core, React JS, MySQL y desplegada en IIS.
                    </p>
                </div>}
                {this.state.tracker&&
                <div className='experiencia'>
                    <h1>Vehicle Tracker</h1>
                    <h2>Programadora | 2022</h2>
                    <p>
                        Web api desarrollada con herramientas como GraphQL, 
                        microservicios con protocolos SOAP y la API de Google Maps 
                        para realizar el seguimiento y mostrar la información de 
                        un vehículo en tiempo real durante una cantidad de tiempo 
                        definida por el usuario, desarrollada en Node JS, 
                        ASP.NET Core, React JS, ésta hace uso de Docker y MySQL.
                    </p>
                </div>}
               

            </div>
        )
    }
}