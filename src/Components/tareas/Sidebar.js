import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { TareaEntradas } from './TareaEntradas'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout =()=>{
        dispatch(startLogout()); 
    }
    return (
        <aside className="tarea__sidebar" >
            <div className="tarea__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Cristian </span>
                </h3>
                <button onClick={handleLogout}  className="btn">
                    Cerrar Sesión
                </button>
            </div>
            <div className="tarea__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5"> Nueva Entrada </p>
            </div>
            <TareaEntradas/>
        </aside>
    )
}

