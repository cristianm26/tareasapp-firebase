import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from "../types/types";
import { startLoading,finishLoading } from './ui';
import Swal from 'sweetalert2';
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading()); 
            })
            .catch(err => {
               
                dispatch(finishLoading())
                Swal.fire('Error','No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario o equivocado en la contraseña.', 'error')
            })
    }
}


export const startRegistroEmailPassword = (email, password, nombre) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: nombre })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(err => {
               
                Swal.fire('Error', 'La dirección de correo electrónico está mal escrita', 'error')
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout =()=>{
    return async (dispatch)=> {
         await firebase.auth().signOut();
         dispatch(logout());
    }
}
export const logout= () =>({
    type: types.logout
})