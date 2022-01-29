import React, { useState } from "react";
import Login from './Login'
import Register from "./Register";
import Home from './Home'
import Topic from './Topic'
import OTP from './OTP'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useAuth } from "../state/UserContext";

export const UnAuthenticatedRoutes = () =>{
    const {loggedIn} = useAuth();
    return(
      <Router>
        <Routes>
              <Route path = "/" element = {<Login />} />
              <Route path = "/register" element = {<Register />} />              
        </Routes>
    </Router>
    )
}
export const AuthenticatedRoutes = () => {
    return(
        <Router>
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = '/topic' element = {<Topic/>}/>
              <Route path = '/otp-verification' element = {<OTP/>}/>
            </Routes>
        </Router>
    )
}
