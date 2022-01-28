import React, { Component, useState } from "react";
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const Register = () => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    const [user, setUser] = useState({name: '', email: '', password: '', cpassword: ''})

    const [error, setError] = useState('')

    const navigate = useNavigate(); 

    const onSubmit = async() => {
        await axios({ method: 'post', url : 'http://localhost:3001/api/user/register', headers: {'Content-Type': 'application/json'},data: user })
        .then((res) => {
            console.log(res.data.email)
            navigate('/otp-verification', {state: {email: res.data.email}})
        }).catch((err) => {
            console.log(err.response.data)
            setError(err.response.data)
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
                        Register
                    </div>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        placeholder="Enter Your Full Name"
                        variant="outlined"
                        required={true}
                        onChange= {e => setUser({...user, name: e.target.value})}
                        name="firstName"
                        inputRef={register({
                        required: "First Name is required.",
                        })}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        placeholder="Enter Your Email id"
                        required={true}
                        onChange= {e => setUser({...user, email: e.target.value})}
                        name="email"
                        inputRef={register({
                        required: "email is required.",
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New Password (Minimum 6 charachters)"
                        variant="outlined"
                        required={true}
                        onChange= {e => setUser({...user, password: e.target.value})}
                        name="password"
                        inputRef={register({
                        required: "Password is required.",
                        })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        required={true}
                        onChange= {e => setUser({...user, cpassword: e.target.value})}
                        name="cpassword"
                        inputRef={register({
                        required: "Please re-type your password",
                        })}
                        error={Boolean(errors.cpassword)}
                        helperText={errors.cpassword?.message}
                    />
                    <div className="buttonContainer" style={{ justifyContent: "center" }}>
                    {error && <h1>{error}</h1>}
                    <input className="loginBtn" type = "submit" value = "Register"/>
                    </div>
                    <button className="forgotBtn" onClick = {()=> navigate('/')}>
                        Already have an account? Login now.
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Register;
