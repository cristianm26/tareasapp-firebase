import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../Components/auth/LoginScreen'
import { RegistroScreen } from '../Components/auth/RegistroScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} /> 
                <Route exact path="/auth/registro"  component={RegistroScreen}/>
                <Redirect to="/auth/login" />
            </Switch>
            </div>
        </div>
    )
}
