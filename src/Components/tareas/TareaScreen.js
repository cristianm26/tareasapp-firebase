import React from 'react'
import { useSelector } from 'react-redux'
import { NotaScreen } from '../notes/NotaScreen'
import { NadaSeleccionado } from './NadaSeleccionado'
import { Sidebar } from './Sidebar'

export const TareaScreen = () => {
    const {active} = useSelector(state => state.notes)
    return (
        <div className="tarea__main-content animate__animated animate__fadeIn animate__faster">
            <Sidebar/>
            <main>
                {
                    (active)
                    ? (<NotaScreen/>)
                    : (<NadaSeleccionado/>)
                }
             
              
            </main> 
           
        </div>
    )
}
