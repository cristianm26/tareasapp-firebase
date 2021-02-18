import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import moment from 'moment'
export const NotasAppBar = () => {
    const noteDate = moment();
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () =>{
        dispatch(startSaveNote(active));
    }
    const handlePicture = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file)); 
        }
    }

    return (
        <div className="notas__appbar">
            <span>{noteDate.format('LLLL')}</span>
            <input id="fileSelector" type="file" name="file"  style={{display: 'none'}} onChange={handleFileChange} />
            <div>
                <button className="btn" onClick={handlePicture} >
                    Imagen
                </button>
                <button className="btn" onClick={handleSave} >
                    Guardar
                </button>
            </div>
        </div>
    )
}
