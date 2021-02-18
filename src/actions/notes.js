import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { cargarNotas } from "../helpers/cargarNotas";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) =>{
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const doc = await db.collection(`${uid}/tareas/notas`).add(newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote))
    }
}
export const activeNote = (id, note ) => ({
    type: types.activeNotes,
    payload: { 
        id,
        ...note
    }
}) 

export const addNewNote = (id, note) => ({
    type: types.addNotes,
    payload: {
        id, ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes= await cargarNotas(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.loadNotes,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) =>{
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/tareas/notas/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote( note.id, noteToFirestore));
        Swal.fire('Guardar', note.title , 'success')
    }
}

export const refreshNote = ( id, note) => ({
    type: types.updatedNotes,
    payload: {
        id, 
        note: {
            id, ...note
        }
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const {active: activeNote} = getState().notes;
        Swal.fire({
            title:'Subiendo Imagen',
            text:'Por Favor Espere...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl; 
        dispatch( startSaveNote(activeNote))
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/tareas/notas/${id}`).delete(); 
        dispatch(deleteNote(id))
    }
}
export const deleteNote = (id) => ({
    type: types.deleteNotes,
    payload: id 
})

export const notesLogout = () => ({
    type: types.logoutCleaningNotes
})