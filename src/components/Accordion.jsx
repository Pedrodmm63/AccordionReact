import { data } from '../services/data.js'
import { AccordionItem } from './AccordionItem.jsx'


export const Accordion = () => {

    return (
        <div className='accordion'>
            {
                //Recorremos el data.js y le indicamos que item es el elemento sobre el que iteramos
                //E index es el indice del array es decir el la posicion del objeto dentro del array
                data.map((item, index) => (
                    <AccordionItem
                    //Aqui le decimos que item es cada uno dentro del componente AccordionItem
                        pregunta={item.pregunta}
                        respuesta={item.respuesta}
                    //Y auqi le indicamos que la llave de cada elemento es la posicion del array que ocupa
                        key={index} 
                    />
                ))}
    </div>
    )
}
