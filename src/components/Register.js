import React, { Component, useState } from "react";
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

    const [user, setUser] = useState({name: '', username: '', password: '', cpassword: '', Key: ''})

    const onSubmit = () => {
        console.log(user)
        navigate('/')
    };

    const handleRegister = e => {
        e.preventDefault();
        if(user.name === '' || user.username === '' || user.password === '' || user.cpassword === '' || user.Key === ''){
            console.log('please fill all required fields')
        }else{
            console.log(user)
        }
    }
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
                        required={true}
                        onChange= {e => setUser({...user, username: e.target.value})}
                        name="userName"
                        inputRef={register({
                        required: "Username is required.",
                        })}
                        error={Boolean(errors.userName)}
                        helperText={errors.userName?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New Password"
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
                    <TextField
                        id="outlined-basic"
                        label="Secret key"
                        variant="outlined"
                        placeholder="Given by college admin"
                        required={true}
                        onChange= {e => setUser({...user, Key: e.target.value})}
                        name="key"
                        inputRef={register({
                            required: "Secret key is required.",
                        })}
                        error={Boolean(errors.key)}
                        helperText={errors.key?.message}
                    />
                    <div className="buttonContainer" style={{ justifyContent: "center" }}>
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
