import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const token = localStorage.getItem('auth-token')
    useEffect(()=> {
        axios({
            method: 'get',
            url: 'http://localhost:3001/api/home',
            headers: {'auth-token': token}
        }).then(res => {
            console.log(res)
            setLoggedIn(true)
        }).catch(err => {
            console.log(err)
        })
        console.log(loggedIn)
    },[loggedIn])
    const authContextValue = {
        loggedIn,
        setLoggedIn
    }
    return <AuthContext.Provider value={authContextValue} {...props}>{props.children}</AuthContext.Provider>
}

const useAuth = () => React.useContext(AuthContext)

export {AuthProvider, useAuth}