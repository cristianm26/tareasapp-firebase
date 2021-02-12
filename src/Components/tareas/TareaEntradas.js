import React from 'react'
import { TareaEntrada } from './TareaEntrada'

export const TareaEntradas = () => {
    const entradas = [1,2,3,4,5]
    return (
        <div className="tareas_entradas">
            {
                entradas.map(value=> (
                    <TareaEntrada key={value} />
                ))
            }
        </div>
    )
}
 