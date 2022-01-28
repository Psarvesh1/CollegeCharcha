import React, { Component, useState } from "react";
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';

import "./Login.css";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const OTP = () => {
    const location = useLocation()

    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    console.log(location.state.email)

    const [otpData, setOtpData] = useState({otp: '', email: location.state.email})

    const [error, setError] = useState('')

    const onSubmit = async() => {
        console.log(otpData)
        await axios({ method: 'post', url : 'http://localhost:3001/api/user/otp-verification', headers: {'Content-Type': 'application/json'}, data: otpData })
        .then((res) => {
            console.log(res)
            navigate('/login')
        }).catch((err) => {
            console.log(err)
            // setError(err.response.data)
        })
    };

    
    const navigate = useNavigate();
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
                        label="OTP"
                        placeholder="Enter OTP send to your email"
                        variant="outlined"
                        required={true}
                        onChange= {e => setOtpData({...otpData, otp: e.target.value})}
                        name="otp"
                        inputRef={register({
                        required: "First Name is required.",
                        })}
                        error={Boolean(errors.otp)}
                        helperText={errors.otp?.message}
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
export default OTP;
