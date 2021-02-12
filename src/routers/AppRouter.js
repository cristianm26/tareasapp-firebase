import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import {firebase} from '../firebase/firebaseConfig'
import { TareaScreen } from '../Components/tareas/TareaScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRouters';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setchecking] = useState(true);
    const [isAutenticated, setisAutenticated] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setisAutenticated(true)
            }else{
                setisAutenticated(false)
            }
            setchecking(false); 
        });
    }, [dispatch, setchecking, setisAutenticated])
    if(checking){
        return (
            <h1>Espere unos segundos..</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute Autenticado={isAutenticated} path="/auth" component={AuthRouter} />
                    <PrivateRoute Autenticado={isAutenticated} path="/" exact component={TareaScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
    )
}
