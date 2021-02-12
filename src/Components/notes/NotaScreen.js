import React from 'react'
import { NotasAppBar } from './NotasAppBar'

export const NotaScreen = () => {
    return (
        <div className="notas_menu-content">
            <NotasAppBar/>
            <div className="notas__contenido">
                <input type="text" placeholder="Ingrese ell titulo de la tarea" className="notas__titulo-input" />
                <textarea placeholder="Que tarea tienes pensado hacer" className="notas__textarea"></textarea>
                <div className="notas__imagen">
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130238819/original/d4096d4950eba421600f21c6c753c19375222eb6/draw-you-a-landscape-image-with-ms-paint.png" alt="imagen"/>
                </div>
            </div>
        </div>
    )
}
