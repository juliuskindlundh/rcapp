import React, { useEffect, useState } from "react";
import { useNewFetchContext, useTokenContext, useUsernameContext } from "../Context/DataContext";
import userService from "../Service/UserService";

function LoginContainer(){

    const [usernameTextField,setUsernameTextField] = useState("");
    const [password,setPassword] = useState("");
    const {token,setToken} = useTokenContext();
    const [statuseText,setStatusText] = useState("");
    const {setUsername} = useUsernameContext();
    const {newFetch,setNewFetch} = useNewFetchContext();

    useEffect(()=>{
        if(token !== ""){
            sessionStorage.setItem("username",usernameTextField);
        }
        else{
            sessionStorage.setItem("username","");
        }
    },[token]);

    const handleChangeName = (e) =>{
        setUsernameTextField(e.target.value);
    }

    const handleChangePsw = (e) =>{
        setPassword(e.target.value);
    }

    const handleLogin = () =>{
        userService.login(usernameTextField,password,setToken,setStatusText,setUsername,newFetch,setNewFetch);        
    }

    const handleCreate = () =>{
        userService.create({
            "username":usernameTextField,
            "password":password
        },setStatusText);
    }

    const clearFields=()=>{
        setUsernameTextField("");
        setPassword("");
    }
    const handleLogout = () =>{
        userService.logout(usernameTextField,setToken,setStatusText,clearFields,setUsername,newFetch,setNewFetch);
    }

    return(
        <div className="loginContainer">
            Username
            <input type="text" onChange={handleChangeName} value={usernameTextField}></input>
            Password
            <input type="password" onChange={handleChangePsw} value={password}></input>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCreate}>Register</button>
            <button onClick={handleLogout}>Logout</button>
            {statuseText}
        </div>
    )
}
export default LoginContainer;