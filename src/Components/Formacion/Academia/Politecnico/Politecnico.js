import React from "react";
import MT from  '../../../../img/AcademiaLogos/mark-twain-icon.png';
import "./Politecnico.css";

export default function Politecnico() {
  return (
    <div className="AcademiaContainer">
      <div className="AcademiaBanner"></div>

    <h1>Formación</h1>
    <h2>Académica</h2>
    <p>Aquí podrás encontrar todo lo que desees saber sobre mis <i>conocimientos certificados. </i>
     Sin embargo, siempre he considerado que el aprendizaje es una búsqueda incansable que se encarga de develar lo que el velo de la curiosidad va poniendo en el camino.
    <br/><br/> Por lo anterior puedo decir que cuento con conocimientos que no tienen una certificación debido a que fueron adquiridos de manera autodidacta como el inglés o el diseño. 
    </p>
    <div className="MarkTwain">
    <p>
        <blockquote>"Nunca he dejado que mi instrucción escolar interfiera con mi educación."</blockquote>
    <br/>
    <cite>- Mark Twain</cite>
    </p>
    <img src={MT} alt="Mark Twain Icon"></img>
    </div>
    <h1>Formación</h1>
    <h2>Académica</h2>
    <p>Aquí podrás encontrar todo lo que desees saber sobre mis <i>conocimientos certificados. </i>
     Sin embargo, siempre he considerado que el aprendizaje es una búsqueda incansable que se encarga de develar lo que el velo de la curiosidad va poniendo en el camino.
    <br/><br/> Por lo anterior puedo decir que cuento con conocimientos que no tienen una certificación debido a que fueron adquiridos de manera autodidacta como el inglés o el diseño. 
    </p>
    <div className="MarkTwain">
    <p>
        <blockquote>"Nunca he dejado que mi instrucción escolar interfiera con mi educación."</blockquote>
    <br/>
    <cite>- Mark Twain</cite>
    </p>
    <img src={MT} alt="Mark Twain Icon"></img>
    </div>
    </div>
  );
}
