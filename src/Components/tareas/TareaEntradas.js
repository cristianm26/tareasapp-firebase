import React from 'react'
import { useSelector } from 'react-redux'
import { TareaEntrada } from './TareaEntrada'

export const TareaEntradas = () => {
    const {notes} = useSelector(state => state.notes)
    
    return (
        <div className="tareas_entradas">
            {
                notes.map(note=> (
                    <TareaEntrada key={note.id} {...note} />
                ))
            }
        </div>
    )
}
 