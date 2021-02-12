import React from 'react'
import { NotaScreen } from '../notes/NotaScreen'
import { NadaSeleccionado } from './NadaSeleccionado'
import { Sidebar } from './Sidebar'

export const TareaScreen = () => {
    return (
        <div className="tarea__main-content">
            <Sidebar/>
            <main>
              {/*  <NadaSeleccionado/> */}
              <NotaScreen/>
            </main>
           
        </div>
    )
}
