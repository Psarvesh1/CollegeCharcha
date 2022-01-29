import React, { useEffect, useState } from "react";
import Login from './components/Login'
import Register from "./components/Register";
import Home from './components/Home'
import Topic from './components/Topic'
import OTP from './components/OTP'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useAuth } from "./state/UserContext";

const App = () =>{
    const {loggedIn} = useAuth();
    useEffect(()=> {
        
    }, [loggedIn])
    return(
      <Router>
        <Routes>
            {!loggedIn && (
              <>
                <Route path = "/login" element = {<Login />} />
                <Route path = "/register" element = {<Register />} />
                </>
            )}
            {loggedIn && (
              <>
              <Route path = "/home" element = {<Home />} />
              <Route path = '/topic' element = {<Topic/>}/>
              <Route path = '/otp-verification' element = {<OTP/>}/>
              </>
            )}
            <Route path = "*" element = {<Navigate to={loggedIn? "/home": "login"}/>}/>
        </Routes>
    </Router>
    )
}

export default App;
