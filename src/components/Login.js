import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <h1>College Charcha</h1>
        <h4>A place to share knowledge and better understand the world!</h4>
        <form className={classes.root} noValidate autoComplete="off">
          <div
            style={{
              textAlign: "left",
              borderBottom: "1px solid #D3D3D3",
              paddingBottom: "5px",
            }}
          >
            Login
          </div>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <div className="buttonContainer">
            <button className="forgotBtn">Forgot Password?</button>
            {/* <Button variant="contained" color="primary" size="medium">
              Primary
            </Button>
             */}
            <button className="loginBtn" onClick = {()=> {
              navigate('/home')
            }}>Login</button>
          </div>
          <button className="forgotBtn" onClick={()=> navigate('/register')}>
            Don't have an account? Create one.
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
