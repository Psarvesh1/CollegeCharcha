import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
    root: {
            width: '25%'
    },
}));
const Navigation = () => {
  const navigate = useNavigate()
    const classes = useStyles();
    return (
        <div className="navigationMenu">
        <div className = "childMenu">
        <h1 style={{ color: "#b92b27", cursor: 'pointer' }} onClick={()=> navigate('/home')}>College Charcha</h1>
        <TextField
          label="Search"
          className = {classes.root}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton size = 'large'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div style = {{display: 'flex', width: '7%', justifyContent: 'space-between'}}>
        <div className = "profileContainer">
        <img
        className = "profile"
        src="https://scontent.fbom2-2.fna.fbcdn.net/v/t1.6435-9/95935946_100851904966896_4050341609680666624_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gc9OaCDbcT8AX91o4OF&_nc_ht=scontent.fbom2-2.fna&oh=c18a7d6e4a9949063d513d503c1b4bf8&oe=61CB3E65" />
        </div>
        <button onClick={() => navigate('/')}>
        <img className = "logoutIcon" src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"/>
        </button>
        </div>
      </div>
      </div>
    )
}

export default Navigation
