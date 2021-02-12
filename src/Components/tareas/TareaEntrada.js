import React from 'react'

export const TareaEntrada = () => {
    return (
        <div className="tarea__entrada pointer">
            <div className="tarea__entrada-imagen" style={{backgroundSize: 'cover', backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)'}}>

            </div>
            <div className="tarea__entrada-body">
                <p className="tarea__entrada-titulo">Un Nuevo Dia</p>
                <p className="tarea__entrada-content">Un nuevo  dia ya hiciste </p>
            </div>
            <div className="tarea__entrada-fecha-caja">
                <span>Lunes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
