import React, { useState } from "react";
import Login from './components/Login'
import Register from "./components/Register";
import Home from './components/Home'
import Topic from './components/Topic'
import OTP from './components/OTP'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { UserContext } from "./state/UserContext";

const App = () =>{
    const [authState, setAuthState] = useState({
      _id: '',
      email: '',
      name: '',
      token: '',
      isAuth: 'false'
    })
    return(
      <Router>
        <UserContext.Provider value={[authState, setAuthState]}>
        <Routes>
              <Route path = "/" element = {<Login />} />
              <Route path = "/register" element = {<Register />} />

              <Route path = "/home" element = {<Home />} />
              <Route path = '/topic' element = {<Topic/>}/>
              <Route path = '/otp-verification' element = {<OTP/>}/>
              
        </Routes>
        </UserContext.Provider>
    </Router>
    )
}

export default App;
