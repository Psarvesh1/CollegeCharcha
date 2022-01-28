import react, {useContext} from 'react'
import axios from 'axios'
import { UserContext } from "../state/UserContext";
import { useNavigate } from "react-router-dom";

const IsAuthenticated = async () => {
    const navigate = useNavigate(); 
    const {authState, setAuthState} = useContext(UserContext)
    const token = localStorage.getItem('auth-token')
    axios({
        method: 'post',
        url: 'http://localhost:3001/api/user/home',
        headers: {'auth-token': token}
    }).then({
        navigate('/home')
    })
}
export default IsAuthenticated;