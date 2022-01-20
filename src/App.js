import React from "react";
import Login from './components/Login'
import Register from "./components/Register";
import Home from './components/Home'
import Topic from './components/Topic'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
        <Routes>
              <Route path = "/" element = {<Login />} />
              <Route path = "/register" element = {<Register />} />
              <Route path = "/home" element = {<Home />} />
              <Route path = '/topic' element = {<Topic/>}/>
        </Routes>
    </Router>
    )
  }
}

export default App;
