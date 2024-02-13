import { data } from './services/data'
import AccordionItem from './AccordionItem'

export const accordion = () => {

    return (
        <div className='accordion'>
            {
                data.map((index, item) => (
                    <AccordionItem
                        pregunta={item.pregunta}
                        respuesta={item.respuesta}
                        key={index} 
                    />
                ))}
    </div>
    )
}
