import React from 'react'
import { useNavigate } from 'react-router';
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const Navigate = useNavigate();
    const HandleClick =() => {
Navigate("./dashboard")
    }
  return (
    <div className='Login'>
<h1>
    Login
</h1>
    
   
    <div className='Login-Username'>
        <TextField id="standard-basic" label="UserName" variant="standard" />
    </div>
    <div className='Login-Password'>
        <TextField id="standard-basic" label="Password" type="password" variant="standard" />
    </div>
    <div className='Login-button'>
    <Button 
    onClick={HandleClick} variant="contained">Login</Button>
    </div>
    </div>
  )
}

export default Login