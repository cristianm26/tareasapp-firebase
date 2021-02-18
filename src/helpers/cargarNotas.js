import { db } from "../firebase/firebaseConfig"


export const cargarNotas =async (uid) => {
    const notesSnap= await db.collection(`${uid}/tareas/notas`).get();
    const notes = [];
    notesSnap.forEach(snapHijo=> {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return notes
}
