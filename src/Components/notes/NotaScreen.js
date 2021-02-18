import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotasAppBar } from './NotasAppBar'

export const NotaScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;
    const activeId = useRef(note.id)

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues}));
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id))
    }

    return (
        <div className="notas_menu-content">
            <NotasAppBar />
            <div className="notas__contenido">
                <input type="text" placeholder="Ingrese ell titulo de la tarea" className="notas__titulo-input" name="title" value={title} onChange={handleInputChange} />
                <textarea placeholder="Que tarea tienes pensado hacer" className="notas__textarea"  name="body" value={body} onChange={handleInputChange}></textarea>
                {
                    (note.url)
                    && (
                        <div className="notas__imagen">
                            <img src={note.url} alt="imagen" />
                        </div>
                    )
                }
            </div>
            <button className="btn btn-danger" onClick={handleDelete} >
                Eliminar 
            </button>
        </div>
    )
}
