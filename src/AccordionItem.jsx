import { useState } from "react";

export const AccordionItem = ({pregunta, respuesta}) => {
    const [isOpen, setIsOpen] = useState(false);

    const activarAcordeon = () => {
      setIsOpen(!isOpen);
    };
  
    return (
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
