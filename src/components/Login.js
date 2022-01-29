import React, { useState , useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./Login.css";
import { useAuth } from "../state/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  }));
  
  const Login = () => {
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = useAuth()
  const classes = useStyles();
  const [user, setUser] = useState({email: '',  password: ''})
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState('')
  const onSubmit = async() => {
    await axios({ method: 'post', url : 'http://localhost:3001/api/user/login', headers: {'Content-Type': 'application/json'},data: user })
    .then((res) => {
        console.log(res.data)
        const token = res.data
        localStorage.setItem("auth-token", token)
        setLoggedIn(true)
    }).catch((err) => {
        // console.log(err.response.data)
        // setError(err.response.data)
    })
  };
  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <h1>College Charcha</h1>
        <h4>A place to share knowledge and better understand the world!</h4>
        <form className={classes.root} noValidate autoComplete="off" onSubmit = {handleSubmit(onSubmit)}>
          <div
            style={{
              textAlign: "left",
              borderBottom: "1px solid #D3D3D3",
              paddingBottom: "5px",
            }}
          >
            Login
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email id"
            required={true}
            onChange={e => setUser({ ...user, email: e.target.value })}
            name="email"
            inputRef={register({
              required: "email is required.",
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Password (Minimum 6 charachters)"
            variant="outlined"
            required={true}
            onChange={e => setUser({ ...user, password: e.target.value })}
            name="password"
            inputRef={register({
              required: "Password is required.",
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <div className="buttonContainer">
            <button className="forgotBtn">Forgot Password?</button>
            <input className="loginBtn" type = "submit" value = "Login"/>
          </div>
          <button className="forgotBtn" onClick={() => navigate('/register')}>
            Don't have an account? Create one.
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
