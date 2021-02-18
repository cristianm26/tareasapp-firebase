import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { TareaEntradas } from './TareaEntradas'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const {displayName} = useSelector(state => state.auth)
    const handleLogout =()=>{
        dispatch(startLogout()); 
    }
    const handleAddEntrada = ()=>{
        dispatch(startNewNote())
    }
    return (
        <aside className="tarea__sidebar" >
            <div className="tarea__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {displayName} </span>
                </h3>
                <button onClick={handleLogout}  className="btn">
                    Cerrar Sesión
                </button>
            </div>
            <div className="tarea__new-entry" onClick={handleAddEntrada}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5"> Nueva Entrada </p>
            </div>
            <TareaEntradas/>
        </aside>
    )
}

