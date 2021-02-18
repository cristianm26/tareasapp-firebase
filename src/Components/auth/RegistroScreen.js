import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';

import { startRegistroEmailPassword } from '../../actions/auth';

export const RegistroScreen = () => {
    const dispatch = useDispatch(); 
    const {msgError} = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        nombre:'Cristian',
        email:'cristian260893@gmail.com',
        password:'12345678',
        confirpassword:'12345678'
    });
    const { nombre,email, password, confirpassword }= formValues;
    const handleRegistro= (e)=>{
        e.preventDefault();
        if(esFormValido){
            dispatch(startRegistroEmailPassword(email, password, nombre));
        }
    }
    const esFormValido =()=>{
        if(nombre.trim().length===0){
            dispatch(setError( 'Nombre es Requerido'))
            return false; 
        }else if (!validator.isEmail(email) ){
            dispatch(setError('El Email es Requerido'))
            return false;
        }else if(password !== confirpassword || password.length <5 ){
            dispatch(setError('La contraseña debe de tener minimo 10 caracteres y coincidir con la misma contraseña '))
            return false;
        }
        dispatch(removeError())
        return true;
    }
    return (
        <>
            <h3 className="auth__title" >Registro</h3>
            <form onSubmit={handleRegistro} className="animate__animated animate__fadeIn animate__faster">
                {  
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input className="auth__input" type="text" placeholder="Nombre" name="nombre" autoComplete="off" value={nombre} onChange={handleInputChange} />
                <input className="auth__input" type="text" placeholder="Email" name="email" value={email} autoComplete="off"  onChange={handleInputChange}/>
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirmar Password" name="confirpassword" value={confirpassword} onChange={handleInputChange}/>
                <button className="btn btn-primary btn-block mb-5" type="submit" >  Registrarme</button>
                
                
                <Link to="/auth/login" className="link">
                   ¿Ya tienes una Cuenta?
                </Link>
            </form>
        </>
    )
}
