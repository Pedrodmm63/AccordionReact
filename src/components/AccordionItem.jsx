import { useState } from "react";

export const AccordionItem = ({pregunta, respuesta}) => {

  //Declaramos un hook useState para que podamos indicar si el acordeon está abierto o cerrado
  //Se podria poner tambien como false pero es lo mismo
    const [isOpen, setIsOpen] = useState();

    //Se crea una funcion llave para indicarle que el acordeon siempre se va a iniciar a lo contrario a isOpen
    //Es decir siempre se va a iniciar cerrado
    const activarAcordeon = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      //Aqui se le indica que si esta abierto se le otorga una clase si no esta abierto se le otorga otra
      <li className={isOpen ? "accordion_item active" : "accordion_item"}>
      <button className="button" onClick={activarAcordeon}>
        {pregunta}
      </button>
      <div className={isOpen ? "answer_wrapper open" : "answer_wrapper"}>
        <div className="answer">{respuesta}</div>
      </div>
    </li>
    );
}
