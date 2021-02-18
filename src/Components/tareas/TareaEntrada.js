import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
export const TareaEntrada = ({ id, title, body, date, url }) => {
    const noteDate = moment(date);
    const dispatch = useDispatch();
    const handleEntryClick = () => {
        dispatch(
            activeNote(id, {
                title, body, date, url
            })
        )

    }
    return (
        <div className="tarea__entrada pointer" onClick={handleEntryClick}>
            {
                url &&
                <div className="tarea__entrada-imagen" 
                    style={{
                        backgroundSize: 'cover', 
                        backgroundImage: `url(${url})`
                    }}
                >

                </div>
            }
            <div className="tarea__entrada-body">
                <p className="tarea__entrada-titulo">{title}</p>
                <p className="tarea__entrada-content">{body} </p>
            </div>
            <div className="tarea__entrada-fecha-caja">
                <span>{noteDate.format('ddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
